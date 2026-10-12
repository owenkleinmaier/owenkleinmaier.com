// loaded in <head> so the saved theme applies before first paint
const root = document.documentElement;
const saved = localStorage.getItem("theme");
const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = saved || (prefersDark ? "dark" : "light");

function toggleTheme() {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", root.dataset.theme);
  updateToggle();
}

function updateToggle() {
  const btn = document.querySelector(".theme-toggle");
  if (btn) btn.textContent = root.dataset.theme === "dark" ? "light" : "dark";
}

document.addEventListener("DOMContentLoaded", updateToggle);

