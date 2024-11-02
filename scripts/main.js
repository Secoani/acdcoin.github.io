// main.js
window.addEventListener('resize', () => {
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth > 857 && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    }
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

function expandMen(){
    const dropdowns = document.querySelector('.dropdowns');
    const navLinks = document.querySelector('.nav-links');


    dropdowns.addEventListener('mouseover', () => {
        navLinks.style.height = '250px';
    });

    dropdowns.addEventListener('mouseout', () => {
        navLinks.style.height = '165px';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // localStorage'da dil varsa onu al, yoksa varsayılan olarak Türkçe'yi ayarla
    const savedLanguage = localStorage.getItem('language') || 'tr';
    
    // Sayfanın dilini ayarla
    setLanguage(savedLanguage);
    
    // Dil seçim kutusunu kaydedilen dile göre ayarla
    const langSelect = document.querySelector('.language');
    langSelect.value = savedLanguage;

    // Tüm navigasyon bağlantılarına seçili dili ekle
    updateNavLinks(savedLanguage);
});

// Navigasyon bağlantılarını güncelle ve mevcut dil için bağlantılara dil parametresi ekle
function updateNavLinks(lang) {
    const links = document.querySelectorAll('nav a, .slogan-area a, .description a');
    links.forEach(link => {
        const url = new URL(link.href);
        url.searchParams.set('lang', lang); // `lang` parametresini ayarla veya güncelle
        link.href = url.toString();
    });
}