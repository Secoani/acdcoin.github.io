// download.js

function setLanguage(lang) {
    const content = {
        tr: {
            title: "ACDcoin İndir",
            backButton: "← Geri",
            downloadTitle: "ACDcoin İndir",
            downloadDesc: "ACDcoin'in en son sürümünü indirmek için aşağıdaki butonlardan birine tıklayın.",
            windowsButton: "Windows",
            macButton: "Mac",
            footerText: "ACDcoin &copy; 2024",
            langTurkish: "Türkçe",
            langEnglish: "İngilizce"
        },
        en: {
            title: "Download ACDcoin",
            backButton: "← Back",
            downloadTitle: "Download ACDcoin",
            downloadDesc: "ACDcoin is a cryptocurrency that offers users a secure and innovative digital asset experience.",
            windowsButton: "Windows",
            macButton: "Mac",
            footerText: "ACDcoin &copy; 2024",
            langTurkish: "Turkish",
            langEnglish: "English"
        }
    };

    const langSelect = document.querySelector('.language');
    langSelect.querySelector('option[value="tr"]').textContent = content[lang].langTurkish;
    langSelect.querySelector('option[value="en"]').textContent = content[lang].langEnglish;
    
    document.title = content[lang].title;
    document.querySelector('.back-button').textContent = content[lang].backButton;
    document.querySelector('.container h1').textContent = content[lang].downloadTitle;
    document.querySelector('.container p').textContent = content[lang].downloadDesc;
    document.querySelector('.windows-btn-download').textContent = content[lang].windowsButton;
    document.querySelector('.mac-btn-download').textContent = content[lang].macButton;
    document.querySelector('footer p').textContent = content[lang].footerText;
}

function changeLanguage(lang) {
    setLanguage(lang);
    localStorage.setItem('language', lang);
}