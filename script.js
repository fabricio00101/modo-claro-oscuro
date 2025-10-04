const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;
const iconSun = document.getElementById("icon_sun");
const iconMoon = document.getElementById("icon_moon");



themeToggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    iconSun.classList.toggle("hidden");
    iconMoon.classList.toggle("hidden");
})