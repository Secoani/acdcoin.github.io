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
            footerText: "ACDcoin © 2024",
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
            footerText: "ACDcoin © 2024",
            langTurkish: "Turkish",
            langEnglish: "English"
        }
    };

    
    document.title = content[lang].title;
    document.querySelector('.back-button').textContent = content[lang].backButton;
    document.querySelector('.container h1').textContent = content[lang].downloadTitle;
    document.querySelector('.container p').textContent = content[lang].downloadDesc;
    document.querySelector('.windows-btn-download').textContent = content[lang].windowsButton;
    document.querySelector('.mac-btn-download').textContent = content[lang].macButton;
    document.querySelector('footer p').textContent = content[lang].footerText;
    
    
    const langSelect = document.querySelector('.language');
    langSelect.querySelector('option[value="tr"]').textContent = content[lang].langTurkish;
    langSelect.querySelector('option[value="en"]').textContent = content[lang].langEnglish;
}

// Dili değiştir ve seçili dili localStorage'da sakla
function changeLanguage(lang) {
    setLanguage(lang);
    localStorage.setItem('language', lang); // Seçilen dili localStorage'a kaydet

    // URL'yi güncelle
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang); // `lang` parametresini güncelle
    window.history.pushState({}, '', url); // URL'yi güncelle ve sayfa yenilenmeden adres çubuğunu değiştir
}

// URL'den dil parametresini oku ve sayfa yüklendiğinde ayarla
const urlParams = new URLSearchParams(window.location.search);
const urlLang = urlParams.get('lang');
if (urlLang) {
    changeLanguage(urlLang);
    localStorage.setItem('language', urlLang); // URL'den gelen dili localStorage'a kaydet
}