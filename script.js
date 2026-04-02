// Dark mode toggle
const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggle.textContent = "🌙";
    }
});

// Scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".animate").forEach(el => observer.observe(el));

// ================= PROJECTS DATA =================
const projects = [
    {
        title: "Expense Tracker Web App",
        description: "Tracks expenses with categories and charts.",
        link: "https://tk-budget-tracker.netlify.app/"
    },
    {
        title: "BueChat",
        description: "social webapp made with nodejs for backend",
        link: "https://bluechat-byis.onrender.com"
    },
];

// ================= RENDER PROJECTS =================
const projectsContainer = document.getElementById("projects-container");

if (projectsContainer) {
    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card text-only";

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Live Demo</a>
        `;

        projectsContainer.appendChild(card);
    });
}