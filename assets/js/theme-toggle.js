document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("dark-mode-toggle");
  const doc = document.documentElement;
  const darkClass = "dark-mode";
  // Init
  if(localStorage.getItem("theme") === "dark") {
    doc.classList.add(darkClass);
  }
  toggle.addEventListener("click", function() {
    doc.classList.toggle(darkClass);
    localStorage.setItem("theme", doc.classList.contains(darkClass) ? "dark" : "light");
  });
});
