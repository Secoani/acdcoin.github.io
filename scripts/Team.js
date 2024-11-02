import content from './content.js';

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'tr';
    setLanguage(savedLanguage);
    const langSelect = document.querySelector('.language');
    langSelect.value = savedLanguage;
});

function setLanguage(lang) {
    document.title = content[lang].title;
    document.getElementById('branding').querySelector('h1 a').textContent = content[lang].headerTitle;
    document.querySelector('.nav-links li:nth-child(1) a').textContent = content[lang].navHome;
    document.querySelector('.nav-links li:nth-child(2) a').textContent = content[lang].navMining;
    document.querySelector('.nav-links li.dropdowns a').textContent = content[lang].navAbout;
    document.querySelector('.dropdown .element a').textContent = content[lang].navContact;
    document.querySelector('.dropdown ul li:nth-child(2) a').textContent = content[lang].navTeam;
    document.querySelector('.nav-links li:nth-child(4) a').textContent = content[lang].navTransactions;
    document.querySelector('.nav-links li:nth-child(5) a').textContent = content[lang].navDownload;
    document.querySelector('footer p').textContent = content[lang].footerText;

    const teamTitle = document.querySelector('#team-container h1');
    teamTitle.textContent = lang === 'tr' ? 'Ekibimiz' : 'Our Team';
    document.querySelector('#team-container p').textContent = lang === 'tr' ? 'ACDcoin arkasındaki zeki zihinlerle tanışın.' : 'Meet the brilliant minds behind ACDcoin.';
}

function changeLanguage(lang) {
    setLanguage(lang);
    localStorage.setItem('language', lang);
}
