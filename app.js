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

const state = {
  route: "home",
  isAdmin: false,
  adminEmail: "classflow256@gmail.com",
  selectedCalendarDay: 5,
  taskFilter: "All Tasks",
  search: "",
  tasks: [
    {
      id: 1,
      type: "Assignment",
      course: "Advanced Algorithms",
      code: "CS402",
      title: "Distributed Systems Final Project",
      description: "Complete the implementation of the consensus protocol using Raft. Ensure all unit tests pass before submission.",
      due: "Oct 24, 2026",
      time: "11:59 PM",
      priority: "urgent",
      status: "Due in 2 Days"
    },
    {
      id: 2,
      type: "Exam",
      course: "Theoretical Computing",
      code: "CS305",
      title: "P vs NP Complexity Theory",
      description: "Main Hall, Room 402. Bring your student ID and approved calculator.",
      due: "Oct 28, 2026",
      time: "14:00 - 16:30",
      priority: "upcoming",
      status: "Upcoming"
    },
    {
      id: 3,
      type: "Announcement",
      course: "Physics 101",
      code: "PHY101",
      title: "Lab Rescheduled",
      description: "The Physics 101 lab originally scheduled for Tuesday has been moved to Thursday afternoon.",
      due: "Just Now",
      time: "",
      priority: "normal",
      status: "New"
    }
  ],
  posts: [
    {
      id: 1,
      type: "Assignment",
      title: "Physics Lab 04: Thermodynamics Results",
      description: "Please ensure all calculations for the specific heat capacity are rounded to three decimal places before upload.",
      due: "Due Oct 24, 2026",
      posted: "Posted 2h ago",
      priority: "normal"
    },
    {
      id: 2,
      type: "Announcement",
      title: "Change of Venue: Advanced Calculus",
      description: "The lecture scheduled for tomorrow will now be held in Room 402, Block C instead of the main auditorium.",
      due: "Priority: High",
      posted: "Posted Oct 20",
      priority: "high"
    }
  ]
};

const viewStage = document.querySelector("#viewStage");
const authScreen = document.querySelector("#authScreen");
const appScreen = document.querySelector("#appScreen");
const modalHost = document.querySelector("#modalHost");
const modalContent = document.querySelector("#modalContent");
const toastStack = document.querySelector("#toastStack");

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
  return `
    <div class="page-grid">
      <section class="page-grid">
        ${pageTitle(
          "Welcome back, Alex",
          "Tuesday, May 5th - Faculty of Engineering"
        )}

        <div class="stats-grid">
          ${statCard("clipboard", "Active Semester", "24", "Total Tasks Assigned", "")}
          ${statCard("alarm", "Urgent", "03", "Pending Deadlines", "red")}
          ${statCard("graduation", "GPA: 3.8", "06", "Active Courses", "green")}
        </div>

        <section>
          <div class="section-head">
            <h2 class="section-title">Priority & Upcoming</h2>
            <button class="link-button" data-route="tasks">View All</button>
          </div>
          <div class="announcement-list">
            ${state.tasks.map(taskCard).join("")}
          </div>
        </section>
      </section>
    </div>
  `;
}
function statCard(iconName, kicker, number, label, tone) {
  return `
    <article class="stat-card">
      <div class="stat-top">
        <span class="stat-icon ${tone}">${icon(iconName)}</span>
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
  const filters = ["All Tasks", "Assignments", "Exams", "Announcements"];
  const query = state.search.toLowerCase();
  const filtered = state.tasks.filter((task) => {
    const matchesSearch = [task.title, task.course, task.description].join(" ").toLowerCase().includes(query);
    const matchesFilter =
      state.taskFilter === "All Tasks" ||
      (state.taskFilter === "Assignments" && task.type === "Assignment") ||
      (state.taskFilter === "Exams" && task.type === "Exam") ||
      (state.taskFilter === "Announcements" && task.type === "Announcement");
    return matchesSearch && matchesFilter;
  });

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
          ${progressRow("Assignments Done", "12/15", 80)}
          ${progressRow("Exam Readiness", "64%", 64)}
          <button class="secondary-action" style="width:100%; margin-top: 24px">View Gradebook ${icon("chevron-right")}</button>
        </section>
      </aside>
    </div>
  `;
}

function taskCard(task) {
  const typeClass = task.type.toLowerCase();
  const badgeTone = task.priority === "urgent" ? "red" : task.priority === "normal" ? "green" : "";
  return `
    <article class="task-card ${typeClass}">
      <div class="task-tags">
        <span class="badge ${badgeTone}">${task.type}</span>
        <span class="meta-line">• ${task.course} (${task.code})</span>
      </div>
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <div class="task-footer">
        <div class="task-meta">
          <span>${icon("clock")} ${task.time || task.due}</span>
          <span>${task.due}</span>
        </div>
        <button class="tiny-button" data-task-action="${task.id}">${task.type === "Exam" ? "Study Guide" : "Details"}</button>
      </div>
    </article>
  `;
}

function progressRow(label, value, width) {
  return `
    <div class="progress-row">
      <div><span>${label}</span><strong>${value}</strong></div>
      <div class="progress-track"><span style="width:${width}%"></span></div>
    </div>
  `;
}

function miniCalendar() {
  const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  const nums = [19, 20, 21, 22, 23, 24, 25];
  return `
    <div style="padding: 18px; display:grid; gap:12px">
      <div style="display:grid; grid-template-columns: repeat(7, 1fr); gap:8px; text-align:center; color:#607087; font-size:11px">
        ${days.map((day) => `<span>${day}</span>`).join("")}
        ${nums.map((num) => `<strong style="padding:8px 0; border-radius:5px; background:${num === 22 ? "#dceaff" : "transparent"}; color:${num === 22 ? "var(--blue)" : "#516176"}">${num}</strong>`).join("")}
      </div>
      <span class="badge red" style="justify-content:flex-start">14:00 - UI/UX Quiz</span>
      <span class="badge" style="justify-content:flex-start">16:30 - Group Sync</span>
    </div>
  `;
}

function completed(course, title) {
  return `
    <article class="content-card completed-row">
      <div>
        <span class="card-kicker">${course}</span>
        <h3>${title}</h3>
      </div>
      <span class="badge green">${icon("check")}</span>
    </article>
  `;
}

function renderCalendar() {
  const days = [
    ["25", true], ["26", true], ["27", true], ["28", true], ["29", true], ["30", true], ["1", false],
    ["2", false], ["3", false], ["4", false], ["5", false, true], ["6", false], ["7", false], ["8", false],
    ["9", false], ["10", false, false, true], ["11", false], ["12", false], ["13", false], ["14", false], ["15", false],
    ["16", false], ["17", false], ["18", false], ["19", false], ["20", false], ["21", false], ["22", false],
    ["23", false], ["24", false], ["25", false], ["26", false], ["27", false], ["28", false], ["29", false]
  ];
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return `
    <div class="page-grid calendar-shell">
      <section class="calendar-card" style="padding: clamp(16px, 4vw, 28px)">
        <div class="calendar-toolbar">
          <div>
            <h1>September<br />2024</h1>
            <p>Fall Semester • Week 4</p>
          </div>
          <div class="calendar-controls">
            <button class="icon-button" type="button" data-calendar-prev aria-label="Previous month">${icon("chevron-left")}</button>
            <button class="secondary-action" type="button" data-calendar-today>Today</button>
            <button class="icon-button" type="button" data-calendar-next aria-label="Next month">${icon("chevron-right")}</button>
          </div>
        </div>
        <div class="calendar-grid" style="margin-top: 24px">
          ${weekdays.map((day) => `<div class="weekday">${day}</div>`).join("")}
          ${days.map(([day, muted, hasEvent, today]) => `
            <button class="day-cell ${muted ? "is-muted" : ""} ${Number(day) === state.selectedCalendarDay && !muted ? "is-selected" : ""} ${hasEvent ? "has-event" : ""} ${today ? "is-today" : ""}" data-calendar-day="${muted ? "" : day}" type="button">
              <span>${day}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <aside class="page-grid">
        <section class="content-card legend-card">
          <div class="legend-row">
            <span class="legend-dot red"></span><span class="meta-line">Deadline</span>
            <span class="legend-dot"></span><span class="meta-line">Exam</span>
          </div>
        </section>
        <section class="content-card agenda-card">
          <div class="agenda-header">
            <h2 class="section-title">Daily Agenda</h2>
            <span class="card-kicker">Thursday, Sept ${state.selectedCalendarDay}</span>
          </div>
          <div class="agenda-list">
            ${agendaItem("09:00", "Advanced Calculus II", "Hall 12A", "primary")}
            ${agendaItem("11:30", "Research Ethics Seminar", "Virtual Session", "")}
            ${agendaItem("23:59", "Project Submission", "Data Structures & Algorithms", "danger")}
          </div>
        </section>
      </aside>
    </div>
  `;
}

function agendaItem(time, title, meta, tone) {
  return `
    <article class="agenda-item">
      <span class="agenda-time">${time}</span>
      <div class="agenda-box ${tone}">
        <h3>${title}</h3>
        <p class="task-meta">${meta}</p>
      </div>
    </article>
  `;
}

function renderReps() {
  if (!state.isAdmin) {
    return `
      <div class="page-grid">
        ${pageTitle("Administrator Panel", "Only the admin account can create or change class updates.")}
        ${emptyCard("Sign in with classflow256@gmail.com to access publishing tools.")}
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
            <p style="color:#45506a; line-height:1.45">Manage academic updates and coordinate with your class.</p>
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

function closeModal() {
  modalHost.classList.add("is-hidden");
  modalHost.setAttribute("aria-hidden", "true");
  modalContent.innerHTML = "";
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

document.querySelector("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(event.target).get("studentEmail").trim().toLowerCase();
  state.isAdmin = email === state.adminEmail;
  authScreen.classList.add("is-hidden");
  appScreen.classList.remove("is-hidden");
  routeTo("home");
  toast(state.isAdmin ? "Admin access enabled." : "Signed in to the ClassHub demo workspace.");
});

document.querySelector("#togglePassword").addEventListener("click", () => {
  const input = document.querySelector("#studentPassword");
  input.type = input.type === "password" ? "text" : "password";
});

document.addEventListener("click", (event) => {
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
    state.selectedCalendarDay = 10;
    render();
    toast("Jumped to the highlighted class week.");
    return;
  }

  if (event.target.closest("[data-calendar-prev]") || event.target.closest("[data-calendar-next]")) {
    toast("Month switching is ready for a Supabase-backed calendar feed.");
    return;
  }

  if (event.target.closest("[data-map]")) {
    toast("Campus map module placeholder opened.");
    return;
  }

  if (event.target.closest("[data-filter-menu]")) {
    toast("Advanced filters can connect to courses, tags, and reps.");
    return;
  }

  if (event.target.closest("[data-focus-post]")) {
    document.querySelector("#postForm input[name='title']")?.focus();
    return;
  }

  const deleteButton = event.target.closest("[data-delete-post]");
  if (deleteButton && state.isAdmin) {
    state.posts = state.posts.filter((post) => post.id !== Number(deleteButton.dataset.deletePost));
    render();
    toast("Post removed from the local demo feed.");
    return;
  }

  if (event.target.closest("[data-edit-post]")) {
    toast("Post editor is ready to connect to Supabase updates.");
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

document.addEventListener("submit", (event) => {
  if (event.target.id === "postForm") {
    event.preventDefault();
    if (!state.isAdmin) {
      toast("Only the admin can publish posts.");
      return;
    }
    const form = new FormData(event.target);
    state.tasks.unshift({
      id: Date.now(),
      type: form.get("type"),
      course: "Class Update",
      code: "NEW",
      title: form.get("title"),
      description: form.get("description"),
      due: form.get("due") ? `Due ${form.get("due")}` : "Just Now",
      time: "TBD",
      priority: "normal",
      status: "New"
    });
    state.posts.unshift({
      id: Date.now(),
      type: form.get("type"),
      title: form.get("title"),
      description: form.get("description"),
      due: form.get("due") ? `Due ${form.get("due")}` : "Priority: Normal",
      posted: "Just now",
      priority: "normal"
    });
    event.target.reset();
    render();
    toast("Post published to the local demo feed.");
  }
});

document.querySelector("#forgotBtn").addEventListener("click", () => {
  toast("Password recovery screen placeholder ready.");
});

document.querySelector("#notificationsBtn").addEventListener("click", () => {
  toast("You have 3 academic alerts waiting.");
});

document.querySelector("#profileBtn").addEventListener("click", () => {
  toast("Profile menu placeholder ready for account settings.");
});

hydrateIcons();
render();


