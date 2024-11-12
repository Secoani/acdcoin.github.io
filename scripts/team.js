
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'tr';
    setLanguage(savedLanguage);
    const langSelect = document.querySelector('.language');
    langSelect.value = savedLanguage;
});

function setLanguage(lang) {
    const content = {
        tr:{
            title: "ACDcoin Ekip",
            ceo: "Baş Yönetici",
            gm: "Genel Müdür",
            socialMediaMenager: 'Sosyal Medya Yöneticisi',
            arge: "Araştırma  ve Geliştirme Yöneticisi",
            dev: "Yazılım Geliştirici",
            trasher: "Çöpçü",
            trashBin: "Web Tasarımcısı",
            langTurkish: "Türkçe",
            langEnglish: "İngilizce"
        },
        en:{
            title: "ACDcoin team",
            ceo: "Chief Executive Officer",
            gm: "General Manager",
            arge: "Research and Development Manager",
            socialMediaMenager: 'Social Media Manager',
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
    document.querySelector("#socialTitle").textContent = content[lang].socialMediaMenager;
    document.querySelector("#argeTitle").textContent = content[lang].arge;
    document.querySelector("#devTitle").textContent = content[lang].dev;
    document.querySelector("#trasherTitle").textContent = content[lang].trasher;
    document.querySelector("#trashBinTitle").textContent = content[lang].trashBin;

    const langSelect = document.querySelector('.language');
    langSelect.querySelector('option[value="tr"]').textContent = content[lang].langTurkish;
    langSelect.querySelector('option[value="en"]').textContent = content[lang].langEnglish;

    const teamTitle = document.querySelector('#team-container h1');
    teamTitle.textContent = lang === 'tr' ? 'Ekibimiz' : 'Our team';
    document.querySelector('#team-container p').textContent = lang === 'tr' ? 'ACDcoin arkasındaki zeki zihinlerle tanışın.' : 'Meet the brilliant minds behind ACDcoin.';

    

}