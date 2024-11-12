function setLanguage(lang) {
    const content = {
        tr: {
            title: "İletişim - ACDcoin",
            headerTitle: "ACDcoın",
            navHome: "Ana Sayfa",
            navMining: "Madencilik",
            navAbout: "Hakkımızda",
            navContact: "İletişim",
            navteam: "Ekip",
            navTransactions: "İşlemler",
            navDownload: "İndir",
            contactTitle: "Bize Ulaşın",
            contactDesc: "Herhangi bir sorunuz varsa, bize ulaşmaktan çekinmeyin!",
            ceoTitle: "YÖNETİM KURULU BAŞKANI:",
            gmTitle: "GENEL MÜDÜR:",
            emailLabel: "E-posta:",
            phoneLabel: "Telefon numarası:",
            addressLabel: "Adres:",
            footerText: "ACDcoin © 2024",
            langTurkish: "Türkçe",
            langEnglish: "İngilizce"
        },
        en: {
            title: "Contact Us - ACDcoin",
            headerTitle: "ACDcoin",
            navHome: "Home",
            navMining: "Mining",
            navAbout: "About Us",
            navContact: "Contact",
            navteam: "team",
            navTransactions: "Transactions",
            navDownload: "Download",
            contactTitle: "Contact Us",
            contactDesc: "If you have any questions, feel free to reach out to us!",
            ceoTitle: "CEO:",
            gmTitle: "General Manager:",
            emailLabel: "Email:",
            phoneLabel: "Phone:",
            addressLabel: "Address:",
            footerText: "ACDcoin © 2024",
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
    document.querySelector('.dropdown ul li:nth-child(2) a').textContent = content[lang].navteam;
    document.querySelector('.nav-links li:nth-child(4) a').textContent = content[lang].navTransactions;
    document.querySelector('.nav-links li:nth-child(5) a').textContent = content[lang].navDownload;
    
    // Contact specific content
    document.querySelector('.main-content h2').textContent = content[lang].contactTitle;
    document.querySelector('.main-content p:first-of-type').textContent = content[lang].contactDesc;
    document.querySelector('.main-content p.ceoLabel strong').textContent = content[lang].ceoTitle;
    document.querySelector('.main-content p.EmailLabel strong').textContent = content[lang].emailLabel;
    document.querySelector('.main-content p.PhoneLabel strong').textContent = content[lang].phoneLabel;
    document.querySelector('.main-content p.AddressLabel strong').textContent = content[lang].addressLabel;
    document.querySelector('.main-content p.gmLabel strong').textContent = content[lang].gmTitle;
    document.querySelector('.main-content p.gmEmailLabel strong').textContent = content[lang].emailLabel;
    document.querySelector('.main-content p.gmPhoneLabel strong').textContent = content[lang].phoneLabel;
    document.querySelector('.main-content p.gmAddressLabel strong').textContent = content[lang].addressLabel;
    
    document.querySelector('footer p').textContent = content[lang].footerText;
    
    const langSelect = document.querySelector('.language');
    langSelect.querySelector('option[value="tr"]').textContent = content[lang].langTurkish;
    langSelect.querySelector('option[value="en"]').textContent = content[lang].langEnglish;
   
}