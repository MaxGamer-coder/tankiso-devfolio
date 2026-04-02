// Dark Mode Logic
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    if(themeToggle) themeToggle.textContent = "☀️";
}

if(themeToggle) {
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        const isDark = body.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        themeToggle.textContent = isDark ? "☀️" : "🌙";
    });
}

// ================= PROJECTS DATA =================
const projects = [
    {
        title: "Expense Tracker Web App",
        description: "A full-stack application that tracks expenses with categories and visual charts using JavaScript.",
        link: "https://tk-budget-tracker.netlify.app/",
        tech: "JS / CSS / HTML"
    },
    {
        title: "BueChat",
        description: "A real-time social messaging web app built with Node.js for a robust backend experience.",
        link: "https://bluechat-byis.onrender.com",
        tech: "Node.js / Socket.io"
    },
    {
        title: "GitHub",
        description: "github profile with everything i have made and deployed.",
        link: "https://github.com/MaxGamer-coder",
        tech: "portfolio"
    }
];

// ================= RENDER PROJECTS =================
const projectsContainer = document.getElementById("projects-container");

if (projectsContainer) {
    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card animate";

        card.innerHTML = `
            <span style="font-size: 0.8rem; color: #2563eb; font-weight: 600;">${project.tech}</span>
            <h3 style="margin: 10px 0;">${project.title}</h3>
            <p style="color: #64748b; font-size: 0.9rem; margin-bottom: 20px;">${project.description}</p>
            <a href="${project.link}" target="_blank" class="btn" style="padding: 8px 20px; font-size: 0.85rem;">View Project</a>
        `;

        projectsContainer.appendChild(card);
    });
}

// Scroll Reveal Animation
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // Trigger skill bar growth if on skills page
            const bars = entry.target.querySelectorAll('.bar span');
            bars.forEach(bar => {
                // Get percentage from the sibling <small> tag
                const pct = bar.parentElement.nextElementSibling.textContent;
                bar.style.width = pct;
            });
        }
    });
}, observerOptions);

document.querySelectorAll(".animate").forEach(el => observer.observe(el));
