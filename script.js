// ===== Data =====
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Git & GitHub",
  "Responsive Design",
  "Problem Solving"
];

const projects = [
  {
    title: "Project One",
    description: "A short description of what this project does and the problem it solves.",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Project Two",
    description: "A short description of what this project does and the problem it solves.",
    tech: ["HTML", "CSS", "JavaScript"]
  }
];

// ===== Render skills =====
function renderSkills() {
  const list = document.getElementById("skills-list");
  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    list.appendChild(li);
  });
}

// ===== Render projects =====
function renderProjects() {
  const list = document.getElementById("projects-list");

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const techList = document.createElement("ul");
    techList.className = "project-card__tech";
    project.tech.forEach(techItem => {
      const techLi = document.createElement("li");
      techLi.textContent = techItem;
      techList.appendChild(techLi);
    });

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(techList);
    list.appendChild(card);
  });
}

// ===== Footer year =====
function renderYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

renderSkills();
renderProjects();
renderYear();