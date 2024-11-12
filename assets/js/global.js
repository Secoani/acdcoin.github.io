// main.js
window.addEventListener("resize", () => {
    const navLinks = document.querySelector(".nav-links");
    if (window.innerWidth > 857 && navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
        document.querySelector(".backdrop").classList.remove("active");
    }
});

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const backdrop = document.querySelector(".backdrop");
    navLinks.classList.toggle("show");
    backdrop.classList.toggle("active");
}

function expandMen() {
    const dropdowns = document.querySelector(".dropdowns");
    const backdrop = document.querySelector(".backdrop");

    dropdowns.addEventListener("mouseover", () => {
        backdrop.classList.add("active");
    });

    dropdowns.addEventListener("mouseout", () => {
        backdrop.classList.remove("active");
    });

    backdrop.addEventListener("click", () => {
        backdrop.classList.remove("active");
    });
}

// Get language from URL or localStorage
function getCurrentLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang");
    return urlLang || localStorage.getItem("language") || "tr";
}

document.addEventListener("DOMContentLoaded", () => {
    const currentLang = getCurrentLanguage();

    // Set the language selector value
    const langSelect = document.querySelector(".language");
    if (langSelect) {
        langSelect.value = currentLang;
    }

    // Set the page content language
    setLanguage(currentLang);

    // Store the language preference
    localStorage.setItem("language", currentLang);

    // Update all navigation links with the current language
    updateNavLinks(currentLang);

    // Initialize backdrop click handler
    const backdrop = document.querySelector(".backdrop");
    backdrop.addEventListener("click", () => {
        const navLinks = document.querySelector(".nav-links");
        if (navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
            backdrop.classList.remove("active");
        }
    });
});

// Update navigation links with language parameter
function updateNavLinks(lang) {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
        if (link.href && link.href.startsWith(window.location.origin)) {
            const url = new URL(link.href);
            url.searchParams.set("lang", lang);
            link.href = url.toString();
        }
    });
}

// Handle language change
function changeLanguage(lang) {
    setLanguage(lang);
    localStorage.setItem("language", lang);

    // Update URL without page reload
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.pushState({}, "", url);

    // Update all navigation links
    updateNavLinks(lang);
}

function setSelector() {
    const langSelect = document.querySelector(".language");
    langSelect.addEventListener("change", (e) => {
        changeLanguage(e.target.value);
    });
}
