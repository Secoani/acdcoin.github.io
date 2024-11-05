
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
            ceo: "Baş Yönetici",
            gm: "Genel Müdür",
            dev: "Yazılım Geliştirici",
            trasher: "Çöpçü",
            trashBin: "Web Tasarımcısı",
            langTurkish: "Türkçe",
            langEnglish: "İngilizce"
        },
        en:{
            title: "ACDcoin Mining",
            ceo: "Chief Executive Officer",
            gm: "General Manager",
            dev: "Software Developer",
            trasher: "Trasher",
            trashBin: "Web Designer",
            langTurkish: "Turkish",
            langEnglish: "English"
        }
    };

    document.title = content[lang].title;
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

    // URL'yi güncelle
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang); // `lang` parametresini güncelle
    window.history.pushState({}, '', url); // URL'yi güncelle ve sayfa yenilenmeden adres çubuğunu değiştir
}
