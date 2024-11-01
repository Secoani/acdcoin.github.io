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

window.addEventListener('resize', () => {
    const navLinks = document.querySelector('.nav-links');
    
    // Ekran genişliği 857 pikselin üstündeyse menüyü kapat
    if (window.innerWidth > 857 && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    }
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}