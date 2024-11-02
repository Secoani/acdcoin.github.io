document.addEventListener('DOMContentLoaded', () => {

    const savedLanguage = localStorage.getItem('language') || 'tr';
    

    setLanguage(savedLanguage);
    

    const langSelect = document.querySelector('.language');
    langSelect.value = savedLanguage;


    updateNavLinks(savedLanguage);
});


function updateNavLinks(lang) {
    const links = document.querySelectorAll('nav a, .slogan-area a, .description a');
    links.forEach(link => {
        const url = new URL(link.href);
        url.searchParams.set('lang', lang); 
        link.href = url.toString();
    });
}

function setLanguage(lang) {
    const content = {
        tr: {
            title: "ACDcoin",
            headerTitle: "ACDcoın",
            navHome: "Ana Sayfa",
            navMining: "Madencilik",
            navAbout: "Hakkımızda",
            navContact: "İletişim",
            navTeam: "Ekip",
            navTransactions: "İşlemler",
            navDownload: "İndir",
            slogan: "Geleceği Şekillendiren ACDcoin Ethereum ile Hayallerini Gerçekleştir!",
            downloadButton: "İndirmek İçin Tıklayınız",
            descriptionTitle: "ACDcoin Nedir?",
            descriptionText: "Merkezi olmayan bir dijital para birimidir ve blockchain teknolojisi üzerine inşa edilmiştir.",
            learnMoreButton: "Daha Fazla Bilgi için Tıklayınız",
            footerText: "ACDcoin &copy; 2024",
            langTurkish: "Türkçe",
            langEnglish: "İngilizce"
        },
        en: {
            title: "ACDcoin",
            headerTitle: "ACDcoin",
            navHome: "Home",
            navMining: "Mining",
            navAbout: "About Us",
            navContact: "Contact",
            navTeam: "Team",
            navTransactions: "Transactions",
            navDownload: "Download",
            slogan: "Shape the Future with ACDcoin on Ethereum and Make Your Dreams Come True!",
            downloadButton: "Click to Download",
            descriptionTitle: "What is ACDcoin?",
            descriptionText: "It is a decentralized digital currency built on blockchain technology.",
            learnMoreButton: "Click for More Info",
            footerText: "ACDcoin &copy; 2024",
            langTurkish: "Turkish",
            langEnglish: "English"
        }
    };

    document.title = content[lang].title;
    document.getElementById('branding').querySelector('h1 a').textContent = content[lang].headerTitle;
    document.querySelector('.nav-links li:nth-child(1) a').textContent = content[lang].navHome;
    document.querySelector('.nav-links li:nth-child(2) a').textContent = content[lang].navMining;
    document.querySelector('.nav-links li.dropdowns a').textContent = content[lang].navAbout;
    document.querySelector('.dropdown .element a').textContent = content[lang].navContact;
    document.querySelector('.dropdown ul li:nth-child(2) a').textContent = content[lang].navTeam;
    document.querySelector('.nav-links li:nth-child(4) a').textContent = content[lang].navTransactions;
    document.querySelector('.nav-links li:nth-child(5) a').textContent = content[lang].navDownload;
    document.querySelector('.slogan-area h1').textContent = content[lang].slogan;
    document.querySelector('.slogan-area button').textContent = content[lang].downloadButton;
    document.querySelector('.description h1').textContent = content[lang].descriptionTitle;
    document.querySelector('.description p').textContent = content[lang].descriptionText;
    document.querySelector('.description button').textContent = content[lang].learnMoreButton;
    document.querySelector('footer p').textContent = content[lang].footerText;

    const langSelect = document.querySelector('.language');
    langSelect.querySelector('option[value="tr"]').textContent = content[lang].langTurkish;
    langSelect.querySelector('option[value="en"]').textContent = content[lang].langEnglish;


    updateNavLinks(lang);
}

function changeLanguage(lang) {
    setLanguage(lang);
    localStorage.setItem('language', lang); 
}

const urlParams = new URLSearchParams(window.location.search);
const urlLang = urlParams.get('lang');
if (urlLang) {
    changeLanguage(urlLang);
    localStorage.setItem('language', urlLang);
}

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
