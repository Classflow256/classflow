# ClassHub

A polished static frontend for the ClassHub academic portal. It includes a secure-style login screen, student dashboard, task center, calendar agenda, and class representative console.

## Files

- `index.html` - app shell and login markup
- `styles.css` - responsive visual system and layouts
- `app.js` - routing, filters, modal forms, local demo data, and interactions
- `assets/classhub-glow.png` - ClassHub brand visual

## Run Locally

Open `index.html` directly in a browser. No build step is required.

If you prefer a local server, run:

```bash
npx serve .
```

## Supabase Integration Points

The current frontend uses local in-memory data so it is easy to preview. Replace these arrays in `app.js` with Supabase queries when you are ready:

- `state.tasks` for assignments, exams, announcements, and deadlines
- `state.posts` for representative posts
- the login form submit handler for Supabase Auth
- the task and post form submit handlers for Supabase inserts

Use Row Level Security on exposed tables, and never place a Supabase `service_role` key in frontend JavaScript.

## Vercel And Namecheap

Deploy the folder to Vercel as a static site. After Vercel gives you a production URL, connect your Namecheap domain by adding the DNS records Vercel provides in the Namecheap Advanced DNS panel.
