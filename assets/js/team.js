function setLanguage(lang) {
    const content = {
        tr: {
            title: "ACDcoin Ekip",
            headerTitle: "ACDcoın",
            navHome: "Ana Sayfa",
            navMining: "Madencilik",
            navAbout: "Hakkımızda",
            navContact: "İletişim",
            navteam: "Ekip",
            navTransactions: "İşlemler",
            navDownload: "İndir",
            aboutTitle: "Hakkımızda",
            ceo: "Baş Yönetici",
            gm: "Genel Müdür",
            socialMediaMenager: "Sosyal Medya Yöneticisi",
            arge: "Araştırma  ve Geliştirme Yöneticisi",
            dev: "Yazılım Geliştirici",
            trasher: "Çöpçü",
            trashBin: "Web Tasarımcısı",
            langTurkish: "Türkçe",
            langEnglish: "İngilizce",
        },
        en: {
            title: "ACDcoin team",
            headerTitle: "ACDcoin",
            navHome: "Home",
            navMining: "Mining",
            navAbout: "About Us",
            navContact: "Contact",
            navteam: "team",
            navTransactions: "Transactions",
            navDownload: "Download",
            ceo: "Chief Executive Officer",
            gm: "General Manager",
            arge: "Research and Development Manager",
            socialMediaMenager: "Social Media Manager",
            dev: "Software Developer",
            trasher: "Trasher",
            trashBin: "Web Designer",
            langTurkish: "Turkish",
            langEnglish: "English",
        },
    };
    document.title = content[lang].title;
    document.getElementById("branding").querySelector("h1 a").textContent =
        content[lang].headerTitle;
    document.querySelector(".nav-links li:nth-child(1) a").textContent =
        content[lang].navHome;
    document.querySelector(".nav-links li:nth-child(2) a").textContent =
        content[lang].navMining;
    document.querySelector(".nav-links li.dropdowns a").textContent =
        content[lang].navAbout;
    document.querySelector(".dropdown .element a").textContent =
        content[lang].navContact;
    document.querySelector(".dropdown ul li:nth-child(2) a").textContent =
        content[lang].navteam;
    document.querySelector(".nav-links li:nth-child(4) a").textContent =
        content[lang].navTransactions;
    document.querySelector(".nav-links li:nth-child(5) a").textContent =
        content[lang].navDownload;

    document.querySelector("#ceoTitle").textContent = content[lang].ceo;
    document.querySelector("#gmTitle").textContent = content[lang].gm;
    document.querySelector("#socialTitle").textContent =
        content[lang].socialMediaMenager;
    document.querySelector("#argeTitle").textContent = content[lang].arge;
    document.querySelector("#devTitle").textContent = content[lang].dev;
    document.querySelector("#trasherTitle").textContent = content[lang].trasher;
    document.querySelector("#trashBinTitle").textContent =
        content[lang].trashBin;

    const langSelect = document.querySelector(".language");
    langSelect.querySelector('option[value="tr"]').textContent =
        content[lang].langTurkish;
    langSelect.querySelector('option[value="en"]').textContent =
        content[lang].langEnglish;

    const teamTitle = document.querySelector("#team-container h1");
    teamTitle.textContent = lang === "tr" ? "Ekibimiz" : "Our team";
    document.querySelector("#team-container p").textContent =
        lang === "tr"
            ? "ACDcoin arkasındaki zeki zihinlerle tanışın."
            : "Meet the brilliant minds behind ACDcoin.";
}
