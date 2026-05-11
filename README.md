# Class Flow

A polished static frontend for the Class Flow academic portal. It includes a secure-style login screen, student dashboard, task center, calendar agenda, and class representative console.

## Files

- `index.html` - app shell and login markup
- `styles.css` - responsive visual system and layouts
- `app.js` - routing, Supabase Auth, class updates, profile photos, and interactions
- `assets/classflow-logo.png` - Class Flow logo

## Run Locally

Open `index.html` directly in a browser. No build step is required.

If you prefer a local server, run:

```bash
npx serve .
```

## Supabase Integration Points

The frontend is wired to Supabase with the project URL and publishable key in `app.js`. It uses Supabase Auth for login, the `class_items` table for class updates, `task_completions` for each student's completed assignments, and a public `avatars` Storage bucket for profile pictures.

Before testing signup, open **Authentication > Sign In / Providers > Email** and turn **Confirm email** off if you want students to enter the dashboard immediately after signup.

Also keep the password rules simple in **Authentication > Password security**. Supabase may still require a minimum length, so use the lowest allowed setting there.

If signup says `email rate exceeded`, Supabase is trying to send confirmation emails through its default mail service. Turn **Confirm email** off, then delete any failed test users from **Authentication > Users** and sign up again. For production with email confirmations enabled, configure a custom SMTP server in Supabase.

Students sign up with their MUST class email. The course code must be lowercase and must match one of the official programme codes from `programmes_offered.docx`. The app reads the dashboard from the email format:

`2025bit196@std.must.ac.ug`

- `2025` = year joined
- `bit` = course code, mapped to Bachelor of Information Technology
- `196` = student number
- `std.must.ac.ug` = required student email domain

The app also derives the student's study year from the email year. In the current setup, the 2025 cohort is Year 1, so `2025bit196@std.must.ac.ug` belongs to the 2025 BIT Year 1 dashboard.

Official lowercase course codes currently supported in `app.js`:

`pha`, `mbr`, `bme`, `eee`, `peem`, `mls`, `bns`, `bse`, `bsp`, `bsal`, `cve`, `mie`, `bs`, `bcs`, `bit`, `phs`, `bgwh`, `bpcd`, `bsaf`, `bba`, `eco`, `bpsm`, `dlt`, `dcm`, `dem`, `dcam`.

The `bs` code appears multiple times in the programme document, so the app groups it as Bachelor of Science with Education.

Create the tables and policies in the Supabase SQL editor:

```sql
create table if not exists public.class_items (
  id uuid primary key default gen_random_uuid(),
  type text not null,
  course text,
  code text,
  title text not null,
  description text not null,
  due text,
  time text,
  resource_link text,
  priority text default 'normal',
  status text default 'New',
  dashboard_key text,
  created_at timestamptz default now()
);

alter table public.class_items add column if not exists dashboard_key text;
alter table public.class_items add column if not exists resource_link text;

create table if not exists public.app_roles (
  email text primary key,
  role text not null check (role in ('admin', 'owner')),
  created_at timestamptz default now()
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text,
  gender text,
  reg_number text,
  university text not null default 'Mbarara University of Science and Technology',
  course text not null,
  year_joined text,
  course_code text,
  student_number text,
  course_duration integer,
  study_year text,
  dashboard_key text,
  avatar_url text,
  role text not null default 'student' check (role in ('student', 'admin', 'owner')),
  created_at timestamptz default now()
);

alter table public.profiles add column if not exists email text;
alter table public.profiles add column if not exists full_name text;
alter table public.profiles add column if not exists gender text;
alter table public.profiles add column if not exists year_joined text;
alter table public.profiles add column if not exists course_code text;
alter table public.profiles add column if not exists student_number text;
alter table public.profiles add column if not exists course_duration integer;
alter table public.profiles add column if not exists study_year text;
alter table public.profiles add column if not exists dashboard_key text;
alter table public.profiles add column if not exists avatar_url text;

create table if not exists public.task_completions (
  user_id uuid not null references auth.users(id) on delete cascade,
  item_id uuid not null references public.class_items(id) on delete cascade,
  completed_at timestamptz default now(),
  primary key (user_id, item_id)
);

insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do update set public = true;

alter table public.class_items enable row level security;
alter table public.app_roles enable row level security;
alter table public.profiles enable row level security;
alter table public.task_completions enable row level security;

grant select on table public.class_items to authenticated;
grant insert, update, delete on table public.class_items to authenticated;
grant select on table public.app_roles to authenticated;
grant select, insert, update on table public.profiles to authenticated;
grant select, insert, update, delete on table public.task_completions to authenticated;

insert into public.app_roles (email, role)
values
  ('2025bit196@std.must.ac.ug', 'admin'),
  ('owner@classflow256.com', 'owner')
on conflict (email) do update set role = excluded.role;

drop policy if exists "Everyone can read class items" on public.class_items;
drop policy if exists "Only admin can manage class items" on public.class_items;
drop policy if exists "Users can read their class items" on public.class_items;
drop policy if exists "Admins can add class items" on public.class_items;
drop policy if exists "Admins can update class items" on public.class_items;
drop policy if exists "Admins can delete class items" on public.class_items;
drop policy if exists "Authenticated users can read role list" on public.app_roles;
drop policy if exists "Users can read their own profile" on public.profiles;
drop policy if exists "Users can create their own profile" on public.profiles;
drop policy if exists "Users can update their own profile" on public.profiles;
drop policy if exists "Users can read their completed tasks" on public.task_completions;
drop policy if exists "Users can mark their own tasks done" on public.task_completions;
drop policy if exists "Users can update their completed tasks" on public.task_completions;
drop policy if exists "Anyone can read profile photos" on storage.objects;
drop policy if exists "Users can upload their own profile photo" on storage.objects;
drop policy if exists "Users can update their own profile photo" on storage.objects;

create policy "Users can read their class items"
on public.class_items
for select
to authenticated
using (
  exists (
    select 1
    from public.app_roles
    where app_roles.email = (auth.jwt() ->> 'email')
      and app_roles.role = 'owner'
  )
  or dashboard_key = (
    select profiles.dashboard_key
    from public.profiles
    where profiles.id = auth.uid()
  )
);

create policy "Admins can add class items"
on public.class_items
for insert
to authenticated
with check (
  exists (
    select 1
    from public.app_roles
    where app_roles.email = (auth.jwt() ->> 'email')
      and app_roles.role in ('admin', 'owner')
  )
  and (
    exists (
      select 1
      from public.app_roles
      where app_roles.email = (auth.jwt() ->> 'email')
        and app_roles.role = 'owner'
    )
    or dashboard_key = (
      select profiles.dashboard_key
      from public.profiles
      where profiles.id = auth.uid()
    )
  )
);

create policy "Admins can update class items"
on public.class_items
for update
to authenticated
using (
  exists (
    select 1
    from public.app_roles
    where app_roles.email = (auth.jwt() ->> 'email')
      and app_roles.role in ('admin', 'owner')
  )
  and (
    exists (
      select 1
      from public.app_roles
      where app_roles.email = (auth.jwt() ->> 'email')
        and app_roles.role = 'owner'
    )
    or dashboard_key = (
      select profiles.dashboard_key
      from public.profiles
      where profiles.id = auth.uid()
    )
  )
)
with check (
  exists (
    select 1
    from public.app_roles
    where app_roles.email = (auth.jwt() ->> 'email')
      and app_roles.role in ('admin', 'owner')
  )
);

create policy "Admins can delete class items"
on public.class_items
for delete
to authenticated
using (
  exists (
    select 1
    from public.app_roles
    where app_roles.email = (auth.jwt() ->> 'email')
      and app_roles.role in ('admin', 'owner')
  )
  and (
    exists (
      select 1
      from public.app_roles
      where app_roles.email = (auth.jwt() ->> 'email')
        and app_roles.role = 'owner'
    )
    or dashboard_key = (
      select profiles.dashboard_key
      from public.profiles
      where profiles.id = auth.uid()
    )
  )
);

create policy "Authenticated users can read role list"
on public.app_roles
for select
to authenticated
using (true);

create policy "Users can read their own profile"
on public.profiles
for select
to authenticated
using (auth.uid() = id);

create policy "Users can create their own profile"
on public.profiles
for insert
to authenticated
with check (auth.uid() = id);

create policy "Users can update their own profile"
on public.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

create policy "Users can read their completed tasks"
on public.task_completions
for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can mark their own tasks done"
on public.task_completions
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update their completed tasks"
on public.task_completions
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Anyone can read profile photos"
on storage.objects
for select
to public
using (bucket_id = 'avatars');

create policy "Users can upload their own profile photo"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'avatars'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "Users can update their own profile photo"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'avatars'
  and (storage.foldername(name))[1] = auth.uid()::text
)
with check (
  bucket_id = 'avatars'
  and (storage.foldername(name))[1] = auth.uid()::text
);
```

The app currently knows these special emails in `app.js`:

- Class president/admin: `2025bit196@std.must.ac.ug`
- App owner: `owner@classflow256.com`

Replace those constants with the real president and owner emails before launch. Students with normal MUST class emails automatically get student access and are routed to the dashboard for their year/course.

Owners can publish to any configured year/course dashboard. Class presidents can publish only to their own dashboard. When adding a task, the `resource_link` field can store a URL, room, platform name, or submission location.

Profile pictures upload to the `avatars` bucket and the public URL is saved in `profiles.avatar_url`.

Use Row Level Security on exposed tables, and never place a Supabase `service_role` key in frontend JavaScript.

## Vercel And Namecheap

Deploy the folder to Vercel as a static site. After Vercel gives you a production URL, connect your Namecheap domain by adding the DNS records Vercel provides in the Namecheap Advanced DNS panel.
