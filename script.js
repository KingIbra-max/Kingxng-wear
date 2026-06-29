// =========================
// KXNG WEAR - SCRIPT.JS
// =========================

// Animation au défilement
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => observer.observe(section));

// Bouton retour en haut
const topButton = document.createElement("button");
topButton.innerHTML = "↑";
topButton.id = "topBtn";
document.body.appendChild(topButton);

topButton.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#d4af37;
color:#111;
font-size:22px;
font-weight:bold;
cursor:pointer;
display:none;
box-shadow:0 8px 20px rgba(0,0,0,.3);
z-index:1000;
`;

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
