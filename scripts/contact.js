// contact.js
function setLanguage(lang) {
    const content = {
        tr: {
            title: "İletişim - ACDcoin",
            headerTitle: "ACDcoın",
            navHome: "Ana Sayfa",
            navMining: "Madencilik",
            navAbout: "Hakkımızda",
            navContact: "İletişim",
            navTeam: "Ekip",
            navTransactions: "İşlemler",
            navDownload: "İndir",
            contactTitle: "Bize Ulaşın",
            contactDesc: "Herhangi bir sorunuz varsa, bize ulaşmaktan çekinmeyin!",
            ceoTitle: "YÖNETİM KURULU BAŞKANI:",
            gmTitle: "GENEL MÜDÜR:",
            emailLabel: "E-posta:",
            phoneLabel: "Telefon numarası:",
            addressLabel: "Adres:",
            footerText: "ACDcoin &copy; 2024"
        },
        en: {
            title: "Contact Us - ACDcoin",
            headerTitle: "ACDcoin",
            navHome: "Home",
            navMining: "Mining",
            navAbout: "About Us",
            navContact: "Contact",
            navTeam: "Team",
            navTransactions: "Transactions",
            navDownload: "Download",
            contactTitle: "Contact Us",
            contactDesc: "If you have any questions, feel free to reach out to us!",
            ceoTitle: "CEO:",
            gmTitle: "General Manager:",
            emailLabel: "Email:",
            phoneLabel: "Phone:",
            addressLabel: "Address:",
            footerText: "ACDcoin &copy; 2024"
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

    // Contact specific content
    document.querySelector('.main-content h2').textContent = content[lang].contactTitle;
    document.querySelector('.main-content p:first-of-type').textContent = content[lang].contactDesc;
    document.querySelector('.main-content p:nth-of-type(2) strong').textContent = content[lang].ceoTitle;
    document.querySelector('.main-content p:nth-of-type(3) strong').textContent = content[lang].emailLabel;
    document.querySelector('.main-content p:nth-of-type(4) strong').textContent = content[lang].phoneLabel;
    document.querySelector('.main-content p:nth-of-type(5) strong').textContent = content[lang].addressLabel;
    document.querySelector('.main-content p:nth-of-type(7) strong').textContent = content[lang].gmTitle;
    document.querySelector('.main-content p:nth-of-type(8) strong').textContent = content[lang].emailLabel;
    document.querySelector('.main-content p:nth-of-type(9) strong').textContent = content[lang].phoneLabel;
    document.querySelector('.main-content p:nth-of-type(10) strong').textContent = content[lang].addressLabel;

    document.querySelector('footer p').textContent = content[lang].footerText;
}

function changeLanguage(lang) {
    setLanguage(lang);
    localStorage.setItem('language', lang);
}