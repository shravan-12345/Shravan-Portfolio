const body = document.body;
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const themeText = document.getElementById("themeText");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    body.classList.add(savedTheme);

    if (savedTheme === "dark-theme") {
        themeText.textContent = "Current Theme: Dark Mode";
    } else {
        themeText.textContent = "Current Theme: Light Mode";
    }
} else {
    body.classList.add("light-theme");
}

// Light Mode
lightBtn.addEventListener("click", () => {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");

    localStorage.setItem("theme", "light-theme");
    themeText.textContent = "Current Theme: Light Mode";
});

// Dark Mode
darkBtn.addEventListener("click", () => {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");

    localStorage.setItem("theme", "dark-theme");
    themeText.textContent = "Current Theme: Dark Mode";
});
