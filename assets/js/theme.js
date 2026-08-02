/* ==========================================================
   THEME.JS
   Shaik Sadiq Portfolio
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeTheme();

});

/* ==========================================
   Initialize Theme
========================================== */

function initializeTheme() {

    const body = document.body;

    const themeButton = document.querySelector(".theme-toggle");

    const savedTheme = localStorage.getItem("portfolio-theme");

    /* ---------- First Visit ---------- */

    if (!savedTheme) {

        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {

            setDarkTheme();

        } else {

            setLightTheme();

        }

    } else {

        if (savedTheme === "dark") {

            setDarkTheme();

        } else {

            setLightTheme();

        }

    }

    /* ---------- Theme Toggle ---------- */

    if (themeButton) {

        themeButton.addEventListener("click", () => {

            if (body.classList.contains("dark-theme")) {

                setLightTheme();

            } else {

                setDarkTheme();

            }

        });

    }

    /* ---------- Keyboard Shortcut ---------- */

    document.addEventListener("keydown", (e) => {

        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "l") {

            if (body.classList.contains("dark-theme")) {

                setLightTheme();

            } else {

                setDarkTheme();

            }

        }

    });

}

/* ==========================================
   Dark Theme
========================================== */

function setDarkTheme() {

    const body = document.body;

    body.classList.remove("light-theme");

    body.classList.add("dark-theme");

    localStorage.setItem("portfolio-theme", "dark");

    updateThemeIcon("dark");

    updateBrowserTheme("#020617");

}

/* ==========================================
   Light Theme
========================================== */

function setLightTheme() {

    const body = document.body;

    body.classList.remove("dark-theme");

    body.classList.add("light-theme");

    localStorage.setItem("portfolio-theme", "light");

    updateThemeIcon("light");

    updateBrowserTheme("#F8FAFC");

}

/* ==========================================
   Theme Icon
========================================== */

function updateThemeIcon(theme) {

    const button = document.querySelector(".theme-toggle");

    if (!button) return;

    if (theme === "dark") {

        button.innerHTML = "☀️";

        button.title = "Switch to Light Mode";

    } else {

        button.innerHTML = "🌙";

        button.title = "Switch to Dark Mode";

    }

}

/* ==========================================
   Browser Theme Color
========================================== */

function updateBrowserTheme(color) {

    let meta = document.querySelector("meta[name='theme-color']");

    if (!meta) {

        meta = document.createElement("meta");

        meta.name = "theme-color";

        document.head.appendChild(meta);

    }

    meta.content = color;

}

/* ==========================================
   System Theme Change Detection
========================================== */

window.matchMedia("(prefers-color-scheme: dark)")
.addEventListener("change", (event) => {

    if (localStorage.getItem("portfolio-theme")) return;

    if (event.matches) {

        setDarkTheme();

    } else {

        setLightTheme();

    }

});

/* ==========================================
   Console Branding
========================================== */

console.log(
    "%cTheme Manager Loaded ✓",
    "color:#2563EB;font-size:14px;font-weight:bold;"
);