// Edit your projects here. Add live and code links to show buttons.
const projects = [
  { name: "Campus Bus Tracking App", when: "Aug 2026 – Present",
    text: "Students see their bus on a map with an estimated arrival time. Drivers' phones send the GPS data.",
    live: "", code: "" },
  { name: "BiteSync", when: "Jul 2025 – Present",
    text: "A mobile-first social recipe app prototype for discovering, saving and sharing recipes.",
    live: "", code: "" },
  { name: "Smart Stays", when: "Jul 2025 – Oct 2025",
    text: "A hotel booking app with sign-up, search by location, dates and guests, and booking management.",
    live: "", code: "" },
  { name: "SMARTUBE", when: "Apr 2023 – Jun 2023",
    text: "A YouTube-style video site built with React, Material UI and RapidAPI.",
    live: "", code: "" }
];
const skills = ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "JavaScript", "Python", "Git & GitHub"];

const projectsEl = document.getElementById("projects");
projects.forEach(p => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `<h3></h3><div class="when"></div><p></p><div class="links"></div>`;
  card.querySelector("h3").textContent = p.name;
  card.querySelector(".when").textContent = p.when;
  card.querySelector("p").textContent = p.text;
  const links = card.querySelector(".links");
  [["Live demo", p.live], ["Source code", p.code]].forEach(([label, url]) => {
    if (!url) return;
    const a = document.createElement("a");
    a.href = url; a.textContent = label; a.rel = "noopener";
    links.appendChild(a);
  });
  projectsEl.appendChild(card);
});

const skillsEl = document.getElementById("skills");
skills.forEach(s => {
  const li = document.createElement("li");
  li.textContent = s;
  skillsEl.appendChild(li);
});

document.getElementById("year").textContent = new Date().getFullYear();
