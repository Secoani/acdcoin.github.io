// web.js
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
        });
    });
});
function changeLanguage(lang) {
    if (lang === "tr") {
        window.location.href = "index_tr.html";
    }
    else{
        window.location.href = "index_en.html";
    }
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}