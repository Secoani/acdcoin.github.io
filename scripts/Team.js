
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'tr';
    setLanguage(savedLanguage);
    const langSelect = document.querySelector('.language');
    langSelect.value = savedLanguage;
});

function setLanguage(lang) {
    const content = {
        tr:{
            title: "ACDcoin Madencilik",
            headerTitle: "ACDcoın",
            navHome: "Ana Sayfa",
            navMining: "Madencilik",
            navAbout: "Hakkımızda",
            navContact: "İletişim",
            navTeam: "Ekip",
            navTransactions: "İşlemler",
            navDownload: "İndir",
            ceo: "Baş Yönetici",
            gm: "Genel Müdür",
            dev: "Yazılım Geliştirici",
            trasher: "Çöpçü",
            trashBin: "Çöp Kutusu",
            langTurkish: "Türkçe",
            langEnglish: "İngilizce"
        },
        en:{
            title: "ACDcoin Mining",
            headerTitle: "ACDcoin",
            navHome: "Home",
            navMining: "Mining",
            navAbout: "About Us",
            navContact: "Contact",
            navTeam: "Team",
            navTransactions: "Transactions",
            navDownload: "Download",
            ceo: "Chief Executive Officer",
            gm: "General Manager",
            dev: "Software Developer",
            trasher: "Trasher",
            trashBin: "Trash Bin",
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
    document.querySelector('footer p').textContent = content[lang].footerText;
    
    document.querySelector("#ceoTitle").textContent = content[lang].ceo;
    document.querySelector("#gmTitle").textContent = content[lang].gm;
    document.querySelector("#devTitle").textContent = content[lang].dev;
    document.querySelector("#trasherTitle").textContent = content[lang].trasher;
    document.querySelector("#trashBinTitle").textContent = content[lang].trashBin;

    const langSelect = document.querySelector('.language');
    langSelect.querySelector('option[value="tr"]').textContent = content[lang].langTurkish;
    langSelect.querySelector('option[value="en"]').textContent = content[lang].langEnglish;

    const teamTitle = document.querySelector('#team-container h1');
    teamTitle.textContent = lang === 'tr' ? 'Ekibimiz' : 'Our Team';
    document.querySelector('#team-container p').textContent = lang === 'tr' ? 'ACDcoin arkasındaki zeki zihinlerle tanışın.' : 'Meet the brilliant minds behind ACDcoin.';

    

}

function changeLanguage(lang) {
    setLanguage(lang);
    localStorage.setItem('language', lang);
}
