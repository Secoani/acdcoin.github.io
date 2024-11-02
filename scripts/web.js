
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
