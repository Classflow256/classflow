const icons = {
  "at-sign": '<path d="M12 8a4 4 0 1 0 3.56 5.82C15.93 15.16 17.2 16 18.6 16 21 16 22 13.9 22 12a10 10 0 1 0-4 8"/><circle cx="12" cy="12" r="4"/>',
  lock: '<rect width="14" height="11" x="5" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z"/><path d="m9 12 2 2 4-5"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  bell: '<path d="M10 21h4"/><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10Z"/>',
  clipboard: '<rect width="14" height="16" x="5" y="5" rx="2"/><path d="M9 5a3 3 0 0 1 6 0"/><path d="M9 11h6M9 15h6"/>',
  calendar: '<path d="M8 2v4M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  map: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  megaphone: '<path d="m3 11 18-5v12L3 13v-2Z"/><path d="M11 14v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6"/>',
  graduation: '<path d="m22 10-10-5-10 5 10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  alarm: '<circle cx="12" cy="13" r="8"/><path d="M12 9v5l3 2"/><path d="M5 3 2 6M19 3l3 3"/>',
  "chevron-left": '<path d="m15 18-6-6 6-6"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  "more-vertical": '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  edit: '<path d="M12 20h9"/><path d="m16.5 3.5 4 4L8 20H4v-4L16.5 3.5Z"/>',
  trash: '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  filter: '<path d="M22 3H2l8 9v7l4 2v-9l8-9Z"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>'
};

const SUPABASE_URL = "https://kawobtctyjmrdrbuliwy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_QvCFHT308D--EtbK4W8kyA_kugK02qH";
const supabaseClient = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;

const UNIVERSITIES = ["Mbarara University of Science and Technology"];
const COURSE_CODES = {
  pha: "Bachelor of Pharmacy",
  mbr: "Bachelor of Medicine and Bachelor of Surgery",
  bme: "Bachelor of Biomedical Engineering",
  eee: "Bachelor of Engineering in Electrical and Electronics Engineering",
  peem: "Bachelor of Science in Petroleum Engineering and Environmental Management",
  mls: "Bachelor of Medical Laboratory Science",
  bns: "Bachelor of Nursing Science",
  bse: "Bachelor of Software Engineering",
  bsp: "Bachelor of Science in Physiotherapy",
  bsal: "Bachelor of Science in Agriculture and Livelihoods",
  cve: "Bachelor of Science in Civil Engineering",
  mie: "Bachelor of Science in Mechanical and Industrial Engineering",
  bs: "Bachelor of Science with Education",
  bcs: "Bachelor of Computer Science",
  bit: "Bachelor of Information Technology",
  phs: "Bachelor of Science in Pharmaceutical Sciences",
  bgwh: "Bachelor of Science in Gender and Applied Women Health",
  bpcd: "Bachelor of Science in Planning and Community Development",
  bsaf: "Bachelor of Science in Accounting and Finance",
  bba: "Bachelor of Business Administration",
  eco: "Bachelor of Science in Economics",
  bpsm: "Bachelor of Science in Procurement and Supply Chain Management",
  dlt: "Diploma in Science Laboratory Technology",
  dcm: "Diploma in Community HIV/AIDS Care and Management",
  dem: "Diploma in Emergency Medicine",
  dcam: "Advanced Diploma in Child and Adolescent Mental Health"
};
const COURSE_DURATIONS = {
  pha: 5,
  mbr: 5,
  bme: 4,
  eee: 4,
  peem: 4,
  mls: 4,
  bns: 4,
  bse: 4,
  bsp: 4,
  bsal: 4,
  cve: 4,
  mie: 4,
  bs: 3,
  bcs: 3,
  bit: 3,
  phs: 3,
  bgwh: 3,
  bpcd: 3,
  bsaf: 3,
  bba: 3,
  eco: 3,
  bpsm: 3,
  dlt: 2,
  dcm: 2,
  dem: 2,
  dcam: 2
};
const CURRENT_COHORT_YEAR = 2025;
const SUPPORTED_YEARS = ["2025", "2024", "2023", "2022", "2021"];
const PRESIDENT_EMAILS = ["2025bit196@std.must.ac.ug"];
const OWNER_EMAILS = ["owner@classflow256.com"];
const STAT_ICON_IMAGES = {
  assignments: "assets/stat-assignments.jpg",
  dueSoon: "assets/stat-due-soon.jpg",
  tests: "assets/stat-tests.jpg",
  exams: "assets/stat-exams.jpg"
};

const state = {
  route: "home",
  authMode: "signin",
  isAdmin: false,
  isOwner: false,
  currentUser: null,
  session: null,
  supabaseReady: Boolean(supabaseClient),
  selectedCalendarDay: new Date().getDate(),
  calendarDate: new Date(),
  taskFilter: "All Tasks",
  search: "",
  tasks: [],
  posts: [],
  completedTaskIds: new Set()
};

const viewStage = document.querySelector("#viewStage");
const authScreen = document.querySelector("#authScreen");
const appScreen = document.querySelector("#appScreen");
const modalHost = document.querySelector("#modalHost");
const modalContent = document.querySelector("#modalContent");
const toastStack = document.querySelector("#toastStack");

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function courseDuration(courseCode) {
  return COURSE_DURATIONS[courseCode] || 3;
}

function studyYearFor(joinedYear, courseCode) {
  const cohort = Number(joinedYear);
  const duration = courseDuration(courseCode);
  if (!Number.isFinite(cohort)) return "";

  const year = CURRENT_COHORT_YEAR - cohort + 1;
  const boundedYear = Math.max(1, Math.min(duration, year));
  return `Year ${boundedYear}`;
}

function parseClassEmail(email) {
  const raw = email.trim();
  const normalized = normalizeEmail(email);
  const match = raw.match(/^(\d{4})([a-z]+)(\d+)@std\.must\.ac\.ug$/);
  if (!match) return null;

  const [, year, courseCode, studentNumber] = match;
  if (!COURSE_CODES[courseCode]) return null;

  return {
    email: normalized,
    year,
    courseCode,
    studentNumber,
    regNumber: `${year}${courseCode.toUpperCase()}${studentNumber}`,
    university: UNIVERSITIES[0],
    course: COURSE_CODES[courseCode],
    courseDuration: courseDuration(courseCode),
    studyYear: studyYearFor(year, courseCode),
    dashboardKey: `${year}-${courseCode}`
  };
}

function roleForEmail(email) {
  const normalized = normalizeEmail(email);
  if (OWNER_EMAILS.includes(normalized)) return "owner";
  if (PRESIDENT_EMAILS.includes(normalized)) return "admin";
  return "student";
}

function userInitial(profile = state.currentUser) {
  const name = profile?.fullName || "";
  const email = profile?.email || "";
  return (name || email).charAt(0).toUpperCase() || "A";
}

function firstName() {
  const name = state.currentUser?.fullName?.trim();
  if (name) return name.split(/\s+/)[0];
  const emailName = state.currentUser?.email?.split("@")[0] || "";
  return emailName || "there";
}

function avatarImageUrl(url) {
  if (!url) return "";
  if (url.startsWith("data:")) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}v=${Date.now()}`;
}

function updateAvatarButton() {
  const button = document.querySelector("#profileBtn");
  if (!button) return;

  const avatarUrl = state.currentUser?.avatarUrl || "";
  button.classList.toggle("has-photo", Boolean(avatarUrl));
  button.innerHTML = avatarUrl
    ? `<img src="${avatarUrl}" alt="" />`
    : userInitial();
}

function dashboardOptions() {
  return SUPPORTED_YEARS.flatMap((year) =>
    Object.entries(COURSE_CODES).map(([code, course]) => ({
      key: `${year}-${code}`,
      label: `${year} - ${course}`
    }))
  );
}

function courseForDashboardKey(dashboardKey) {
  const code = dashboardKey?.split("-")[1];
  return COURSE_CODES[code] || state.currentUser?.course || "Class Update";
}

async function roleForSignedInEmail(email) {
  const fallbackRole = roleForEmail(email);
  if (!supabaseClient) return fallbackRole;

  const { data, error } = await supabaseClient
    .from("app_roles")
    .select("role")
    .eq("email", normalizeEmail(email))
    .maybeSingle();

  if (error) {
    console.error(error);
    return fallbackRole;
  }

  return data?.role || fallbackRole;
}

function profileFromRow(row, fallbackProfile) {
  if (!row) return fallbackProfile;

  return {
    ...fallbackProfile,
    email: row.email || fallbackProfile.email,
    fullName: row.full_name || fallbackProfile.fullName || "",
    gender: row.gender || fallbackProfile.gender || "",
    regNumber: row.reg_number || fallbackProfile.regNumber,
    university: row.university || fallbackProfile.university,
    course: row.course || fallbackProfile.course,
    year: row.year_joined || fallbackProfile.year,
    courseCode: row.course_code || fallbackProfile.courseCode,
    studentNumber: row.student_number || fallbackProfile.studentNumber,
    courseDuration: row.course_duration || fallbackProfile.courseDuration || courseDuration(row.course_code || fallbackProfile.courseCode),
    studyYear: row.study_year || fallbackProfile.studyYear || studyYearFor(row.year_joined || fallbackProfile.year, row.course_code || fallbackProfile.courseCode),
    dashboardKey: row.dashboard_key || fallbackProfile.dashboardKey,
    role: row.role || fallbackProfile.role,
    avatarUrl: row.avatar_url || fallbackProfile.avatarUrl || ""
  };
}

async function loadUserProfile(userId, fallbackProfile) {
  if (!supabaseClient || !userId) return fallbackProfile;

  const { data, error } = await supabaseClient
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    console.error(error);
    return fallbackProfile;
  }

  return profileFromRow(data, fallbackProfile);
}

function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.file}</svg>`;
}

function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icon(node.dataset.icon);
  });
}

function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  toastStack.appendChild(node);
  setTimeout(() => node.remove(), 3200);
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric"
  });
}

function monthTitle(date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });
}

function taskDate(task) {
  const raw = String(task.due || "").replace(/^Due\s+/i, "");
  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function isSameDay(a, b) {
  return a && b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function monthOptions(selectedMonth) {
  return Array.from({ length: 12 }, (_, index) => {
    const label = new Date(2025, index, 1).toLocaleDateString("en-US", { month: "long" });
    return `<option value="${index}" ${index === selectedMonth ? "selected" : ""}>${label}</option>`;
  }).join("");
}

function yearOptions(selectedYear) {
  const currentYear = new Date().getFullYear();
  const years = new Set([
    currentYear - 1,
    currentYear,
    currentYear + 1,
    ...SUPPORTED_YEARS.map(Number)
  ]);

  return Array.from(years)
    .filter((year) => Number.isFinite(year))
    .sort((a, b) => a - b)
    .map((year) => `<option value="${year}" ${year === selectedYear ? "selected" : ""}>${year}</option>`)
    .join("");
}

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function setCalendarMonth(year, month, selectedDay = state.selectedCalendarDay) {
  const safeDay = Math.min(Math.max(1, selectedDay), daysInMonth(year, month));
  state.calendarDate = new Date(year, month, 1);
  state.selectedCalendarDay = safeDay;
}

function tasksOnDate(date) {
  return state.tasks.filter((task) => isSameDay(taskDate(task), date));
}

function calendarTypeClass(type) {
  const normalized = String(type || "").toLowerCase();
  if (normalized === "assignment") return "assignment";
  if (normalized === "test") return "test";
  if (normalized === "exam") return "exam";
  return "announcement";
}

function visibleTasks() {
  const query = state.search.toLowerCase();
  return state.tasks.filter((task) => {
    const matchesSearch = [task.title, task.course, task.description, task.resourceLink].join(" ").toLowerCase().includes(query);
    const matchesFilter =
      state.taskFilter === "All Tasks" ||
      (state.taskFilter === "Assignments" && task.type === "Assignment") ||
      (state.taskFilter === "Tests" && task.type === "Test") ||
      (state.taskFilter === "Exams" && task.type === "Exam") ||
      (state.taskFilter === "Announcements" && task.type === "Announcement");
    return matchesSearch && matchesFilter;
  });
}

function openModal(content) {
  modalContent.innerHTML = content;
  modalHost.classList.remove("is-hidden");
  modalHost.setAttribute("aria-hidden", "false");
  hydrateIcons(modalHost);
}

function renderAuthForm() {
  const isSignup = state.authMode === "signup";

  return `
    <div class="auth-heading">
      <h2>${isSignup ? "Join Your Class" : "Welcome Back"}</h2>
    </div>

    <div class="auth-tabs">
      <button class="${!isSignup ? "is-active" : ""}" type="button" data-auth-mode="signin">Sign In</button>
      <button class="${isSignup ? "is-active" : ""}" type="button" data-auth-mode="signup">Create Account</button>
    </div>

    ${isSignup ? `
      <label class="field-label" for="fullName">Full Name</label>
      <div class="input-shell">
        <span data-icon="users"></span>
        <input id="fullName" name="fullName" type="text" placeholder="Your name" autocomplete="name" required />
      </div>

      <label class="field-label field-spacer" for="gender">Gender</label>
      <div class="input-shell">
        <span data-icon="users"></span>
        <select id="gender" name="gender" required>
          <option value="">Choose gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>
    ` : ""}

    <label class="field-label" for="studentEmail">Class Email</label>
    <div class="input-shell">
      <span data-icon="at-sign"></span>
      <input id="studentEmail" name="studentEmail" type="email" placeholder="2025bit196@std.must.ac.ug" autocomplete="email" required />
    </div>

    <div class="field-row">
      <label class="field-label" for="studentPassword">${isSignup ? "Set Any Password" : "Password"}</label>
      <button class="link-button" type="button" id="forgotBtn">Forgot Password?</button>
    </div>
    <div class="input-shell">
      <span data-icon="lock"></span>
      <input id="studentPassword" name="studentPassword" type="password" placeholder="${isSignup ? "ANY PASSWORD" : "Password"}" autocomplete="${isSignup ? "new-password" : "current-password"}" required />
      <button class="icon-button ghost" type="button" id="togglePassword" aria-label="Show password" title="Show password">
        <span data-icon="eye"></span>
      </button>
    </div>

    <button class="primary-action" type="submit">
      <span>${isSignup ? "Create Account" : "Sign In"}</span>
      <span data-icon="log-in"></span>
    </button>

  `;
}

function setUserRole(profile) {
  const metadataRole = profile.role || roleForEmail(profile.email || "");
  state.isOwner = metadataRole === "owner";
  state.isAdmin = state.isOwner || metadataRole === "admin";
  state.currentUser = profile;
}

function showDashboard() {
  authScreen.classList.add("is-hidden");
  appScreen.classList.remove("is-hidden");
  updateAvatarButton();
  routeTo("home");
}

function dashboardLabel() {
  if (state.isOwner) return "App owner dashboard";
  if (!state.currentUser?.year || !state.currentUser?.course) return "Faculty of Engineering";
  return `${state.currentUser.course} - ${state.currentUser.studyYear || state.currentUser.year}`;
}

function startOfDay(date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function isDueWithinDays(task, days) {
  const dueDate = taskDate(task);
  if (!dueDate) return false;

  const today = startOfDay(new Date());
  const limit = startOfDay(new Date());
  limit.setDate(today.getDate() + days);
  const dueDay = startOfDay(dueDate);
  return dueDay >= today && dueDay <= limit;
}

function isTaskDone(task) {
  return state.completedTaskIds.has(String(task.id));
}

function stats() {
  const assignments = state.tasks.filter((task) => task.type === "Assignment");
  const completedAssignments = assignments.filter(isTaskDone);
  const urgentAssignments = assignments.filter((task) => !isTaskDone(task) && isDueWithinDays(task, 3));
  const tests = state.tasks.filter((task) => task.type === "Test");
  const exams = state.tasks.filter((task) => task.type === "Exam");
  return { assignments, completedAssignments, urgentAssignments, tests, exams };
}

function taskFromRow(row) {
  return {
    id: row.id,
    type: row.type || "Announcement",
    course: row.course || "Class Update",
    code: row.code || "NEW",
    title: row.title,
    description: row.description,
    due: row.due || "Just Now",
    time: row.time || "",
    priority: row.priority || "normal",
    status: row.status || "New",
    resourceLink: row.resource_link || "",
    dashboardKey: row.dashboard_key || ""
  };
}

function taskPayloadFromForm(form) {
  const type = form.get("type");
  const due = form.get("due");
  const dashboardKey = form.get("dashboard_key") || state.currentUser?.dashboardKey || "";
  const resourceLink = String(form.get("resource_link") || "").trim();
  return {
    type,
    course: courseForDashboardKey(dashboardKey),
    code: "NEW",
    title: form.get("title"),
    description: form.get("description"),
    due: due ? `Due ${due}` : "Just Now",
    time: "TBD",
    priority: type === "Announcement" ? "normal" : "upcoming",
    status: "New",
    resource_link: resourceLink,
    dashboard_key: dashboardKey
  };
}

function completionStorageKey() {
  return `classflow:completed:${state.currentUser?.email || "guest"}`;
}

function loadLocalCompletions() {
  try {
    const stored = JSON.parse(localStorage.getItem(completionStorageKey()) || "[]");
    state.completedTaskIds = new Set(stored.map(String));
  } catch (error) {
    console.error(error);
    state.completedTaskIds = new Set();
  }
}

function saveLocalCompletions() {
  localStorage.setItem(completionStorageKey(), JSON.stringify([...state.completedTaskIds]));
}

async function loadTaskCompletions() {
  loadLocalCompletions();
  if (!supabaseClient || !state.session?.user?.id) return;

  const { data, error } = await supabaseClient
    .from("task_completions")
    .select("item_id")
    .eq("user_id", state.session.user.id);

  if (error) {
    console.error(error);
    return;
  }

  data?.forEach((row) => state.completedTaskIds.add(String(row.item_id)));
  saveLocalCompletions();
}

async function markTaskDone(taskId) {
  state.completedTaskIds.add(String(taskId));
  saveLocalCompletions();
  render();

  if (!supabaseClient || !state.session?.user?.id) {
    toast("Marked done on this device.");
    return;
  }

  const { error } = await supabaseClient
    .from("task_completions")
    .upsert({
      user_id: state.session.user.id,
      item_id: taskId
    });

  toast(error
    ? "Marked done here. Run the README SQL so it saves online."
    : "Assignment marked as done.");
}

async function loadClassItems() {
  if (!supabaseClient) return;

  let query = supabaseClient
    .from("class_items")
    .select("*")
    .order("created_at", { ascending: false });

  if (!state.isOwner && state.currentUser?.dashboardKey) {
    query = query.eq("dashboard_key", state.currentUser.dashboardKey);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    state.tasks = [];
    toast("Supabase table is not ready yet. No class items loaded.");
    render();
    return;
  }

  state.tasks = data?.map(taskFromRow) || [];
  await loadTaskCompletions();
  render();
}

async function saveProfile(userId, profile) {
  if (!supabaseClient || !userId) return false;

  const { error } = await supabaseClient
    .from("profiles")
    .upsert({
      id: userId,
      email: profile.email,
      full_name: profile.fullName || "",
      gender: profile.gender || "",
      reg_number: profile.regNumber,
      university: profile.university,
      course: profile.course,
      year_joined: profile.year,
      course_code: profile.courseCode,
      student_number: profile.studentNumber,
      course_duration: profile.courseDuration || null,
      study_year: profile.studyYear || null,
      dashboard_key: profile.dashboardKey,
      role: profile.role,
      avatar_url: profile.avatarUrl || null
    });

  if (error) {
    console.error(error);
    toast("Profile table is not ready yet. You can still preview the dashboard.");
    return false;
  }

  return true;
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

function routeTo(route) {
  state.route = route;
  document.querySelectorAll("[data-route]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.route === route);
  });
  render();
  viewStage.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function pageTitle(title, copy, action = "") {
  return `
    <div class="hero-band">
      <div class="page-title">
        <h1>${title}</h1>
        <p>${copy}</p>
      </div>
      ${action}
    </div>
  `;
}

function renderHome() {
  const summary = stats();
  return `
    <div class="page-grid">
      <section class="page-grid">
        ${pageTitle(
          `Welcome back, ${firstName()}`,
          `${formatDate(new Date())} - ${dashboardLabel()}`
        )}

        <div class="stats-grid">
          ${statCard("assignments", "Assignments", String(summary.assignments.length).padStart(2, "0"), `${summary.completedAssignments.length}/${summary.assignments.length} done`, "")}
          ${statCard("dueSoon", "Due Soon", String(summary.urgentAssignments.length).padStart(2, "0"), "Assignments due in 3 days", "red")}
          ${statCard("tests", "Tests", String(summary.tests.length).padStart(2, "0"), "Total tests", "green")}
          ${statCard("exams", "Exams", String(summary.exams.length).padStart(2, "0"), "Total exams", "")}
        </div>

        <section>
          <div class="section-head">
            <h2 class="section-title">Priority & Upcoming</h2>
            <button class="link-button" data-route="tasks">View All</button>
          </div>
          <div class="announcement-list">
            ${state.tasks.length ? state.tasks.map(taskCard).join("") : emptyCard("No class items have been posted yet.")}
          </div>
        </section>
      </section>
    </div>
  `;
}
function statCard(iconName, kicker, number, label, tone) {
  const imageSrc = STAT_ICON_IMAGES[iconName];
  return `
    <article class="stat-card">
      <div class="stat-top">
        <span class="stat-icon ${tone}">
          ${imageSrc ? `<img src="${imageSrc}" alt="" />` : icon(iconName)}
        </span>
        <span class="stat-kicker">${kicker}</span>
      </div>
      <div>
        <div class="stat-number">${number}</div>
        <p class="stat-label">${label}</p>
      </div>
    </article>
  `;
}

function announcement(kicker, time, title, copy) {
  return `
    <article class="content-card announcement">
      <div class="announcement-head">
        <span class="card-kicker">${kicker}</span>
        <span class="meta-line">${time}</span>
      </div>
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
  `;
}

function deadlineRow(task) {
  const [month, day] = task.due.split(" ");
  return `
    <article class="deadline-row">
      <div class="deadline-date"><span>${month}</span><strong>${day.replace(",", "")}</strong></div>
      <div class="deadline-body">
        <h3>${task.title}</h3>
        <p>${task.course} • ${task.time}</p>
      </div>
    </article>
  `;
}

function renderTasks() {
  const filters = ["All Tasks", "Assignments", "Tests", "Exams", "Announcements"];
  const filtered = visibleTasks();
  const summary = stats();
  const progress = summary.assignments.length ? Math.round((summary.completedAssignments.length / summary.assignments.length) * 100) : 0;

  return `
    <div class="page-grid tasks-layout">
      <section class="page-grid">
        ${pageTitle("Academic Tasks", "Manage deadlines, exams, and important academic announcements in one centralized view.")}
        <div class="filters">
          <label class="search-box">
            ${icon("search")}
            <input id="taskSearch" type="search" value="${state.search}" placeholder="Search assignments..." />
          </label>
          <div class="segmented" role="tablist" aria-label="Task filters">
            ${filters.map((filter) => `<button class="segment ${state.taskFilter === filter ? "is-active" : ""}" data-filter="${filter}" type="button">${filter}</button>`).join("")}
            <button class="segment" type="button" data-filter-menu>${icon("filter")} Filter</button>
          </div>
        </div>

        <section>
          <div class="section-head">
            <h2 class="section-title"><span style="color: var(--red)">•</span> Priority & Upcoming</h2>
          </div>
          <div class="announcement-list">
            ${filtered.length ? filtered.map(taskCard).join("") : emptyCard("No tasks match your search.")}
          </div>
        </section>
      </section>

      <aside class="page-grid">
        <section class="content-card progress-card">
          <h2 class="section-title">Progress Summary</h2>
          ${progressRow("Assignments Done", `${summary.completedAssignments.length}/${summary.assignments.length}`, progress)}
          ${progressRow("Due Soon", String(summary.urgentAssignments.length), summary.assignments.length ? Math.round((summary.urgentAssignments.length / summary.assignments.length) * 100) : 0)}
          ${progressRow("Tests", String(summary.tests.length), state.tasks.length ? Math.round((summary.tests.length / state.tasks.length) * 100) : 0)}
          ${progressRow("Exams", String(summary.exams.length), state.tasks.length ? Math.round((summary.exams.length / state.tasks.length) * 100) : 0)}
          <button class="secondary-action" style="width:100%; margin-top: 24px" data-route="calendar">Open Calendar ${icon("chevron-right")}</button>
        </section>
      </aside>
    </div>
  `;
}

function taskCard(task) {
  const typeClass = task.type.toLowerCase();
  const done = isTaskDone(task);
  const urgent = task.type === "Assignment" && !done && isDueWithinDays(task, 3);
  const badgeTone = done || task.priority === "normal" ? "green" : urgent || task.priority === "urgent" ? "red" : "";
  const resource = task.resourceLink || "";
  const resourceIsUrl = /^https?:\/\//i.test(resource);
  return `
    <article class="task-card ${typeClass} ${done ? "is-done" : ""}">
      <div class="task-tags">
        <span class="badge ${badgeTone}">${done ? "Done" : task.type}</span>
        <span class="meta-line">• ${task.course} (${task.code})</span>
        ${urgent ? `<span class="badge red">Due Soon</span>` : ""}
      </div>
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      ${resource ? `
        <div class="task-resource">
          ${icon("file")}
          ${resourceIsUrl
            ? `<a href="${resource}" target="_blank" rel="noreferrer">Open task link</a>`
            : `<span>${resource}</span>`}
        </div>
      ` : ""}
      <div class="task-footer">
        <div class="task-meta">
          <span>${icon("clock")} ${task.time || task.due}</span>
          <span>${task.due}</span>
        </div>
        <div class="task-buttons">
          ${task.type === "Assignment" && !done ? `<button class="tiny-button secondary" data-mark-done="${task.id}" type="button">Mark as Done</button>` : ""}
          <button class="tiny-button" data-task-action="${task.id}" type="button">${task.type === "Exam" ? "Study Guide" : "Details"}</button>
        </div>
      </div>
    </article>
  `;
}

function progressRow(label, value, width) {
  return `
    <div class="progress-row">
      <div><span>${label}</span><strong>${value}</strong></div>
      <div class="progress-track"><span style="width:${Math.max(0, Math.min(100, width))}%"></span></div>
    </div>
  `;
}

function renderCalendar() {
  const year = state.calendarDate.getFullYear();
  const month = state.calendarDate.getMonth();
  const selectedDay = Math.min(state.selectedCalendarDay, daysInMonth(year, month));
  if (selectedDay !== state.selectedCalendarDay) state.selectedCalendarDay = selectedDay;
  const firstOfMonth = new Date(year, month, 1);
  const gridStart = new Date(year, month, 1 - firstOfMonth.getDay());
  const days = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    const events = tasksOnDate(date);
    const today = isSameDay(date, new Date());
    return { date, muted: date.getMonth() !== month, events, today };
  });
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const selectedDate = new Date(year, month, selectedDay);
  const agenda = tasksOnDate(selectedDate).sort((a, b) => String(a.time || a.due).localeCompare(String(b.time || b.due)));
  const selectedMonth = selectedDate.toLocaleDateString("en-US", { month: "short" }).toUpperCase();

  return `
    <div class="page-grid calendar-shell">
      <section class="calendar-card planner-card">
        <div class="calendar-toolbar">
          <div>
            <span class="card-kicker">Class Planner</span>
            <h1>Select Date</h1>
            <p>${dashboardLabel()}</p>
          </div>
          <div class="calendar-date-badge" aria-hidden="true">
            <span>${selectedMonth}</span>
            <strong>${String(selectedDay).padStart(2, "0")}</strong>
          </div>
        </div>

        <div class="calendar-control-bar">
          <div class="calendar-selectors">
            <label>
              <span>Month</span>
              <select class="calendar-select" data-calendar-month>${monthOptions(month)}</select>
            </label>
            <label>
              <span>Year</span>
              <select class="calendar-select" data-calendar-year>${yearOptions(year)}</select>
            </label>
          </div>
          <div class="calendar-controls">
            <button class="icon-button" type="button" data-calendar-prev aria-label="Previous month">${icon("chevron-left")}</button>
            <button class="secondary-action" type="button" data-calendar-today>Today</button>
            <button class="icon-button" type="button" data-calendar-next aria-label="Next month">${icon("chevron-right")}</button>
          </div>
        </div>

        <div class="calendar-grid">
          ${weekdays.map((day) => `<div class="weekday">${day}</div>`).join("")}
          ${days.map(({ date, muted, events, today }) => {
            const uniqueTypes = [...new Set(events.map((task) => calendarTypeClass(task.type)))].slice(0, 3);
            return `
            <button class="day-cell ${muted ? "is-muted" : ""} ${date.getDate() === selectedDay && !muted ? "is-selected" : ""} ${events.length ? "has-event" : ""} ${today ? "is-today" : ""}" data-calendar-day="${muted ? "" : date.getDate()}" type="button" ${muted ? "tabindex=\"-1\"" : ""}>
              <span class="day-number">${date.getDate()}</span>
              ${events.length ? `<span class="event-count">${events.length}</span>` : ""}
              ${uniqueTypes.length ? `<span class="day-markers">${uniqueTypes.map((type) => `<i class="day-marker ${type}"></i>`).join("")}</span>` : ""}
            </button>
          `;
          }).join("")}
        </div>
      </section>

      <aside class="calendar-side">
        <section class="content-card legend-card">
          <div class="legend-row">
            <span class="legend-dot assignment"></span><span>Assignment</span>
            <span class="legend-dot test"></span><span>Test</span>
            <span class="legend-dot exam"></span><span>Exam</span>
          </div>
        </section>

        <section class="content-card agenda-card">
          <div class="agenda-header">
            <h2 class="section-title">Daily Agenda</h2>
            <span class="card-kicker">${formatDate(selectedDate)}</span>
          </div>
          <div class="agenda-list">
            ${agenda.length ? agenda.map((task) => agendaItem(task)).join("") : `<div class="agenda-empty">${icon("calendar")}<strong>No events scheduled</strong><span>Select another date or ask the class president to add an item.</span></div>`}
          </div>
        </section>
      </aside>
    </div>
  `;
}
function agendaItem(task) {
  const type = calendarTypeClass(task.type);
  const done = isTaskDone(task);
  const resource = task.resourceLink || "";
  return `
    <article class="agenda-item">
      <span class="agenda-time">${task.time || task.due || "All day"}</span>
      <div class="agenda-box ${type} ${task.priority === "urgent" ? "danger" : ""} ${done ? "is-done" : ""}">
        <div class="task-tags">
          <span class="badge ${task.priority === "urgent" ? "red" : ""}">${done ? "Done" : task.type}</span>
          ${task.priority === "urgent" && !done ? `<span class="badge red">Due Soon</span>` : ""}
        </div>
        <h3>${task.title}</h3>
        <p class="task-meta">${task.course}</p>
        ${resource ? `<p class="agenda-resource">${icon("file")} ${/^https?:\/\//i.test(resource) ? `<a href="${resource}" target="_blank" rel="noreferrer">Open Link</a>` : resource}</p>` : ""}
        <div class="agenda-actions">
          ${task.type === "Assignment" && !done ? `<button class="tiny-button secondary" type="button" data-mark-done="${task.id}">Mark as Done</button>` : ""}
          <button class="tiny-button" type="button" data-task-action="${task.id}">Details</button>
        </div>
      </div>
    </article>
  `;
}

function renderReps() {
  if (state.isOwner) {
    const dashboardSelect = dashboardOptions()
      .map((dashboard) => `<option value="${dashboard.key}">${dashboard.label}</option>`)
      .join("");

    return `
      <div class="page-grid">
        ${pageTitle("Owner Console", "Configure Class Flow for Mbarara University and monitor platform issues.")}
        <div class="stats-grid">
          ${statCard("users", "Users", "—", "Connected through Supabase Auth", "")}
          ${statCard("clipboard", "Courses", String(Object.keys(COURSE_CODES).length).padStart(2, "0"), "Detected From Class Email", "")}
          ${statCard("alarm", "Admin Emails", String(PRESIDENT_EMAILS.length).padStart(2, "0"), "Class President Access", "red")}
        </div>
        <section class="content-card form-card">
          <h2><span class="stat-icon">${icon("edit")}</span> Platform Configuration</h2>
          <div class="owner-grid">
            <article>
              <span class="field-label">University</span>
              <strong>${UNIVERSITIES[0]}</strong>
            </article>
            <article>
              <span class="field-label">Courses</span>
              <p>${Object.entries(COURSE_CODES).map(([code, course]) => `${code} - ${course} (${courseDuration(code)} years)`).join(", ")}</p>
            </article>
            <article>
              <span class="field-label">President Emails</span>
              <p>${PRESIDENT_EMAILS.join(", ")}</p>
            </article>
            <article>
              <span class="field-label">Owner Emails</span>
              <p>${OWNER_EMAILS.join(", ")}</p>
            </article>
          </div>
        </section>
        <section class="content-card form-card">
          <h2><span class="stat-icon">${icon("edit")}</span> Publish To A Class</h2>
          <form id="postForm" class="form-grid">
            <label class="form-control">
              <span class="field-label">Target Dashboard</span>
              <select name="dashboard_key" required>${dashboardSelect}</select>
            </label>
            <label class="form-control">
              <span class="field-label">Update Title</span>
              <input name="title" placeholder="e.g. Midterm Lab Report Guidelines" required />
            </label>
            <div class="form-grid two">
              <label class="form-control">
                <span class="field-label">Type</span>
                <select name="type">
                  <option>Announcement</option>
                  <option>Assignment</option>
                  <option>Test</option>
                  <option>Exam</option>
                </select>
              </label>
              <label class="form-control">
                <span class="field-label">Deadline</span>
                <input name="due" type="date" />
              </label>
            </div>
            <label class="form-control">
              <span class="field-label">Description</span>
              <textarea name="description" placeholder="Detail the requirements or instructions here..." required></textarea>
            </label>
            <label class="form-control">
              <span class="field-label">Link or Place</span>
              <input name="resource_link" placeholder="Paste a link, room, platform, or where to submit" />
            </label>
            <div class="form-actions">
              <button class="secondary-action" type="reset">Discard</button>
              <button class="primary-action" type="submit">Publish Post</button>
            </div>
          </form>
        </section>
      </div>
    `;
  }

  if (!state.isAdmin) {
    return `
      <div class="page-grid">
        ${pageTitle("Administrator Panel", "Only the admin account can create or change class updates.")}
        ${emptyCard("Class presidents get access automatically when they sign up with an approved admin email.")}
      </div>
    `;
  }

  return `
    <div class="page-grid rep-layout">
      <section class="page-grid">
        <div class="rep-hero">
          <div>
            <p class="eyebrow">Administrator Panel</p>
            <h1 class="rep-title">Rep Console</h1>
            <p style="color: var(--muted); line-height:1.45">Manage academic updates and coordinate with your class.</p>
          </div>
          <button class="primary-action" type="button" data-focus-post>${icon("plus")} Create New Update</button>
        </div>
        <section class="content-card form-card">
          <h2><span class="stat-icon">${icon("edit")}</span> Draft New Post</h2>
          <form id="postForm" class="form-grid">
            <label class="form-control">
              <span class="field-label">Update Title</span>
              <input name="title" placeholder="e.g. Midterm Lab Report Guidelines" required />
            </label>
            <div class="form-grid two">
              <label class="form-control">
                <span class="field-label">Type</span>
                <select name="type">
                  <option>Announcement</option>
                  <option>Assignment</option>
                  <option>Test</option>
                  <option>Exam</option>
                </select>
              </label>
              <label class="form-control">
                <span class="field-label">Deadline</span>
                <input name="due" type="date" />
              </label>
            </div>
            <label class="form-control">
              <span class="field-label">Description</span>
              <textarea name="description" placeholder="Detail the requirements or instructions here..." required></textarea>
            </label>
            <label class="form-control">
              <span class="field-label">Link or Place</span>
              <input name="resource_link" placeholder="Paste a link, room, platform, or where to submit" />
            </label>
            <div class="form-actions">
              <button class="secondary-action" type="reset">Discard</button>
              <button class="primary-action" type="submit">Publish Post</button>
            </div>
          </form>
        </section>
      </section>

      <aside class="page-grid">
        <section class="content-card engagement-card">
          <span class="card-kicker" style="color:#dce8ff">Engagement</span>
          <strong>84%</strong>
          <p>of classmates have read your last post</p>
        </section>
      </aside>
    </div>
  `;
}
function postCard(post) {
  return `
    <article class="post-card">
      <div class="post-head">
        <span class="task-meta">${icon(post.type === "Assignment" ? "clipboard" : "megaphone")} ${post.type}</span>
        <span class="meta-line">${post.posted}</span>
      </div>
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      <div class="post-actions">
        <span class="badge ${post.priority === "high" ? "red" : ""}">${post.due}</span>
        <span class="task-meta">
          <button class="icon-button ghost" type="button" data-edit-post="${post.id}" aria-label="Edit post">${icon("edit")}</button>
          <button class="icon-button ghost" type="button" data-delete-post="${post.id}" aria-label="Delete post">${icon("trash")}</button>
        </span>
      </div>
    </article>
  `;
}

function emptyCard(message) {
  return `<article class="content-card announcement"><p>${message}</p></article>`;
}

function taskDetailModal(task) {
  const resource = task.resourceLink || "";
  const resourceIsUrl = /^https?:\/\//i.test(resource);
  return `
    <h2 id="modalTitle">${task.title}</h2>
    <div class="form-grid" style="margin-top: 18px">
      <p class="task-meta">${task.type} • ${task.course} ${task.code ? `(${task.code})` : ""}</p>
      <p>${task.description}</p>
      ${resource ? `
        <div class="task-resource">
          ${icon("file")}
          ${resourceIsUrl
            ? `<a href="${resource}" target="_blank" rel="noreferrer">${resource}</a>`
            : `<span>${resource}</span>`}
        </div>
      ` : ""}
      <div class="post-actions">
        <span class="badge ${task.priority === "urgent" ? "red" : ""}">${task.due}</span>
        <span class="task-meta">${icon("clock")} ${task.time || "No time set"}</span>
      </div>
    </div>
  `;
}

function profileModal() {
  const user = state.currentUser || {};
  const avatarUrl = user.avatarUrl || "";
  return `
    <h2 id="modalTitle">Profile</h2>
    <div class="profile-photo-panel">
      <div class="profile-photo ${avatarUrl ? "has-photo" : ""}">
        ${avatarUrl ? `<img src="${avatarUrl}" alt="Profile picture" />` : `<span>${userInitial(user)}</span>`}
      </div>
      <div>
        <strong>${user.fullName || user.email || "Not signed in"}</strong>
        <p>${state.isOwner ? "App Owner" : state.isAdmin ? "Class President" : "Student"}</p>
      </div>
      <label class="secondary-action avatar-upload">
        Change Photo
        <input type="file" accept="image/*" data-avatar-input />
      </label>
    </div>
    <div class="owner-grid profile-grid">
      <article><span class="field-label">Name</span><p>${user.fullName || "Not added"}</p></article>
      <article><span class="field-label">Email</span><p>${user.email || "Not signed in"}</p></article>
      <article><span class="field-label">Gender</span><p>${user.gender || "Not added"}</p></article>
      <article><span class="field-label">Role</span><p>${state.isOwner ? "Owner" : state.isAdmin ? "Class President" : "Student"}</p></article>
      <article><span class="field-label">Course</span><p>${user.course || "Not available"}</p></article>
      <article><span class="field-label">Study Year</span><p>${user.studyYear || "Not available"}</p></article>
      <article><span class="field-label">Duration</span><p>${user.courseDuration ? `${user.courseDuration} Years` : "Not available"}</p></article>
      <article><span class="field-label">Dashboard</span><p>${user.dashboardKey || dashboardLabel()}</p></article>
      <article><span class="field-label">Student Number</span><p>${user.studentNumber || "Not available"}</p></article>
      <button class="danger-action" type="button" data-sign-out>Sign Out</button>
    </div>
  `;
}

function closeModal() {
  modalHost.classList.add("is-hidden");
  modalHost.setAttribute("aria-hidden", "true");
  modalContent.innerHTML = "";
}

async function handleAvatarUpload(file) {
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    toast("Choose an image file for your profile picture.");
    return;
  }

  let previewUrl = "";
  try {
    previewUrl = await fileToDataUrl(file);
  } catch (error) {
    console.error(error);
    toast("The selected image could not be opened.");
    return;
  }

  state.currentUser = {
    ...state.currentUser,
    avatarUrl: previewUrl
  };
  updateAvatarButton();
  modalContent.innerHTML = profileModal();
  hydrateIcons(modalHost);

  if (file.size > 6 * 1024 * 1024) {
    toast("Photo preview updated. Choose an image under 6 MB to save it online.");
    return;
  }

  if (!supabaseClient || !state.session?.user?.id) {
    toast("Photo preview updated. Sign in with Supabase to save it online.");
    return;
  }

  const extension = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
  const avatarPath = `${state.session.user.id}/avatar.${extension}`;
  const { error: uploadError } = await supabaseClient
    .storage
    .from("avatars")
    .upload(avatarPath, file, {
      cacheControl: "3600",
      contentType: file.type,
      upsert: true
    });

  if (uploadError) {
    console.error(uploadError);
    toast(uploadError.message.includes("Bucket")
      ? "Create the avatars bucket in Supabase first, then try again."
      : `Photo preview updated, but Supabase could not save it: ${uploadError.message}`);
    return;
  }

  const { data } = supabaseClient.storage.from("avatars").getPublicUrl(avatarPath);
  const publicUrl = data.publicUrl;
  const profileSaved = await saveProfile(state.session.user.id, {
    ...state.currentUser,
    avatarUrl: publicUrl
  });

  state.currentUser = {
    ...state.currentUser,
    avatarUrl: avatarImageUrl(publicUrl)
  };
  updateAvatarButton();
  modalContent.innerHTML = profileModal();
  hydrateIcons(modalHost);
  toast(profileSaved
    ? "Profile picture updated."
    : "Photo uploaded, but run the README SQL so it saves on your profile.");
}

function render() {
  const views = {
    home: renderHome,
    tasks: renderTasks,
    calendar: renderCalendar,
    reps: renderReps
  };
  viewStage.innerHTML = views[state.route]();
  hydrateIcons(viewStage);
}

document.querySelector("#loginForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  const rawEmail = String(form.get("studentEmail") || "").trim();
  const email = normalizeEmail(rawEmail);
  const password = form.get("studentPassword");
  const fullName = String(form.get("fullName") || "").trim();
  const gender = String(form.get("gender") || "").trim();
  const parsedProfile = parseClassEmail(rawEmail) || (state.authMode === "signup" ? null : parseClassEmail(email));
  const profile = parsedProfile || {
    email,
    fullName,
    gender,
    year: "",
    courseCode: "",
    studentNumber: "",
    regNumber: "",
    university: UNIVERSITIES[0],
    course: "Platform Administration",
    courseDuration: "",
    studyYear: "",
    dashboardKey: "owner"
  };
  profile.fullName = fullName || profile.fullName || "";
  profile.gender = gender || profile.gender || "";
  let role = roleForEmail(email);
  let resolvedProfile = {
    ...profile,
    role,
    avatarUrl: ""
  };

  if (state.authMode === "signup" && role !== "owner" && !parsedProfile) {
    toast("Use a valid lowercase MUST email with an approved course code, for example 2025bit196@std.must.ac.ug.");
    return;
  }

  if (supabaseClient) {
    const authRequest = state.authMode === "signup"
      ? supabaseClient.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: profile.fullName,
              gender: profile.gender,
              reg_number: profile.regNumber,
              university: profile.university,
              course: profile.course,
              year_joined: profile.year,
              course_code: profile.courseCode,
              student_number: profile.studentNumber,
              course_duration: profile.courseDuration,
              study_year: profile.studyYear,
              dashboard_key: profile.dashboardKey,
              role
            }
          }
        })
      : supabaseClient.auth.signInWithPassword({ email, password });

    const { data, error } = await authRequest;

    if (error) {
      const message = error.message.toLowerCase().includes("rate")
        ? "Supabase email limit reached. Turn off Confirm email in Supabase Auth settings, then try again."
        : error.message;
      toast(message);
      return;
    }

    state.session = data.session;
    if (!state.session) {
      toast("Signup is waiting for email confirmation. Turn off Confirm email in Supabase for instant access.");
      return;
    }

    role = await roleForSignedInEmail(email);
    resolvedProfile = {
      ...resolvedProfile,
      role
    };
    if (state.authMode === "signup") {
      await saveProfile(data.user?.id, {
        ...profile,
        role
      });
    }
    resolvedProfile = await loadUserProfile(data.user?.id, resolvedProfile);
    resolvedProfile.role = role;
  }

  setUserRole(resolvedProfile);
  showDashboard();
  await loadClassItems();
  toast(state.isOwner ? "Owner access enabled." : state.isAdmin ? "Admin access enabled." : "Signed in to the Class Flow workspace.");
});

function renderAuth() {
  document.querySelector("#loginForm").innerHTML = renderAuthForm();
  hydrateIcons(document.querySelector("#loginForm"));
}

document.addEventListener("click", async (event) => {
  const authModeButton = event.target.closest("[data-auth-mode]");
  if (authModeButton) {
    state.authMode = authModeButton.dataset.authMode;
    renderAuth();
    return;
  }

  if (event.target.closest("#togglePassword")) {
    const input = document.querySelector("#studentPassword");
    input.type = input.type === "password" ? "text" : "password";
    return;
  }

  if (event.target.closest("#forgotBtn")) {
    const email = normalizeEmail(document.querySelector("#studentEmail")?.value || "");
    if (!email || !supabaseClient) {
      toast("Enter your class email first, then click Forgot Password.");
      return;
    }
    supabaseClient.auth.resetPasswordForEmail(email)
      .then(({ error }) => toast(error ? error.message : "Password reset email sent if the account exists."));
    return;
  }

  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    event.preventDefault();
    routeTo(routeButton.dataset.route);
    return;
  }

  if (event.target.closest("[data-close-modal]")) {
    closeModal();
    return;
  }

  const filter = event.target.closest("[data-filter]");
  if (filter) {
    state.taskFilter = filter.dataset.filter;
    render();
    return;
  }

  const day = event.target.closest("[data-calendar-day]");
  if (day && day.dataset.calendarDay) {
    state.selectedCalendarDay = Number(day.dataset.calendarDay);
    render();
    return;
  }

  if (event.target.closest("[data-calendar-today]")) {
    state.calendarDate = new Date();
    state.selectedCalendarDay = new Date().getDate();
    render();
    return;
  }

  if (event.target.closest("[data-calendar-prev]")) {
    setCalendarMonth(state.calendarDate.getFullYear(), state.calendarDate.getMonth() - 1);
    render();
    return;
  }

  if (event.target.closest("[data-calendar-next]")) {
    setCalendarMonth(state.calendarDate.getFullYear(), state.calendarDate.getMonth() + 1);
    render();
    return;
  }

  if (event.target.closest("[data-filter-menu]")) {
    state.search = "";
    state.taskFilter = "All Tasks";
    render();
    return;
  }

  if (event.target.closest("[data-focus-post]")) {
    document.querySelector("#postForm input[name='title']")?.focus();
    return;
  }

  const deleteButton = event.target.closest("[data-delete-post]");
  if (deleteButton && state.isAdmin) {
    const id = deleteButton.dataset.deletePost;
    if (supabaseClient) {
      const { error } = await supabaseClient.from("class_items").delete().eq("id", id);
      if (error) {
        toast(error.message);
        return;
      }
    }
    state.tasks = state.tasks.filter((task) => String(task.id) !== String(id));
    state.posts = state.posts.filter((post) => String(post.id) !== String(id));
    render();
    toast("Item removed.");
    return;
  }

  const doneButton = event.target.closest("[data-mark-done]");
  if (doneButton) {
    await markTaskDone(doneButton.dataset.markDone);
    return;
  }

  const taskButton = event.target.closest("[data-task-action]");
  if (taskButton) {
    const task = state.tasks.find((item) => String(item.id) === String(taskButton.dataset.taskAction));
    if (task) openModal(taskDetailModal(task));
    return;
  }

  if (event.target.closest("#globalSearchBtn")) {
    routeTo("tasks");
    requestAnimationFrame(() => document.querySelector("#taskSearch")?.focus());
    return;
  }

  if (event.target.closest("#notificationsBtn")) {
    const urgent = state.tasks.filter((task) => task.priority === "urgent");
    openModal(`
      <h2 id="modalTitle">Notifications</h2>
      <div class="announcement-list" style="margin-top: 18px">
        ${urgent.length ? urgent.map(taskCard).join("") : emptyCard("No urgent notifications.")}
      </div>
    `);
    return;
  }

  if (event.target.closest("#profileBtn")) {
    openModal(profileModal());
    return;
  }

  if (event.target.closest("[data-sign-out]")) {
    if (supabaseClient) await supabaseClient.auth.signOut();
    state.session = null;
    state.currentUser = null;
    state.isAdmin = false;
    state.isOwner = false;
    state.tasks = [];
    state.completedTaskIds = new Set();
    updateAvatarButton();
    closeModal();
    appScreen.classList.add("is-hidden");
    authScreen.classList.remove("is-hidden");
    renderAuth();
  }
});

document.addEventListener("change", async (event) => {
  if (event.target.matches("[data-calendar-month]")) {
    setCalendarMonth(state.calendarDate.getFullYear(), Number(event.target.value));
    render();
    return;
  }

  if (event.target.matches("[data-calendar-year]")) {
    setCalendarMonth(Number(event.target.value), state.calendarDate.getMonth());
    render();
    return;
  }

  if (event.target.matches("[data-avatar-input]")) {
    const file = event.target.files?.[0];
    event.target.value = "";
    await handleAvatarUpload(file);
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "taskSearch") {
    state.search = event.target.value;
    render();
    const search = document.querySelector("#taskSearch");
    search?.focus();
    search?.setSelectionRange(state.search.length, state.search.length);
  }
});

document.addEventListener("submit", async (event) => {
  if (event.target.id === "postForm") {
    event.preventDefault();
    if (!state.isAdmin) {
      toast("Only the admin can publish posts.");
      return;
    }

    const form = new FormData(event.target);
    const payload = taskPayloadFromForm(form);
    let task = taskFromRow({ id: Date.now(), ...payload });

    if (supabaseClient) {
      let { data, error } = await supabaseClient
        .from("class_items")
        .insert(payload)
        .select()
        .single();

      if (error && error.message.toLowerCase().includes("resource_link")) {
        const { resource_link: _resourceLink, ...payloadWithoutResource } = payload;
        const retry = await supabaseClient
          .from("class_items")
          .insert(payloadWithoutResource)
          .select()
          .single();
        data = retry.data;
        error = retry.error;
        if (!error) {
          toast("Task posted. Run the README SQL so links can save too.");
        }
      }

      if (error) {
        console.error(error);
        toast(error.message);
        return;
      }

      task = taskFromRow(data);
    }

    state.tasks.unshift(task);
    state.posts.unshift({
      id: Date.now(),
      type: payload.type,
      title: payload.title,
      description: payload.description,
      due: payload.due,
      posted: "Just now",
      priority: payload.priority
    });
    event.target.reset();
    render();
    toast(supabaseClient ? "Post published to Supabase." : "Post published locally for this session.");
  }
});

renderAuth();
hydrateIcons();
render();



