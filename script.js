// Year
document.getElementById('year').textContent = new Date().getFullYear();

/* ===========================
   Typewriter (hero subtitle)
=========================== */
const words = [
  "AWS · Cloud Security",
  "Python · Automation",
  "Ruby on Rails · REST APIs",
  "SQL · PostgreSQL · MySQL",
  "Docker · CI/CD · DevOps",
  "Technical Support · Debugging"
];
const el = document.getElementById('typewriter');
let w = 0, i = 0, deleting = false;

function type() {
  const word = words[w];
  el.textContent = word.slice(0, i);

  if (!deleting && i < word.length) i++;
  else if (deleting && i > 0) i--;
  else if (!deleting && i === word.length) { deleting = true; setTimeout(type, 1200); return; }
  else { deleting = false; w = (w + 1) % words.length; }

  setTimeout(type, deleting ? 40 : 70);
}
type();

/* ===========================
   Theme toggle (light preview)
=========================== */
const btn = document.getElementById('themeBtn');
let dark = true;
function applyTheme() {
  document.body.style.background = dark ? '#000' : '#fff';
  document.body.style.color = dark ? '#eaeaf0' : '#111';
  btn.innerHTML = dark ? '<i class="bi bi-moon"></i>' : '<i class="bi bi-sun"></i>';
}
btn.addEventListener('click', () => { dark = !dark; applyTheme(); });
applyTheme();

/* ===========================
   Scroll reveal (simple)
=========================== */
const revealEls = document.querySelectorAll('.section, .project-card, .skill-card, .about-card');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.transform = 'translateY(0)';
      e.target.style.opacity = '1';
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => {
  el.style.transform = 'translateY(14px)';
  el.style.opacity = '0';
  el.style.transition = 'all .6s ease';
  io.observe(el);
});
