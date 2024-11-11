
function setLanguage(lang) {
    const content = {
        tr: {
            // about-us content
            title: "Hakkımızda - ACDcoin",
            headerTitle: "ACDcoın",
            navHome: "Ana Sayfa",
            navMining: "Madencilik",
            navAbout: "Hakkımızda",
            navContact: "İletişim",
            navteam: "Ekip",
            navTransactions: "İşlemler",
            navDownload: "İndir",
            aboutTitle: "Hakkımızda",
            aboutText: "Bu proje, Ethereum blok zincirinde oluşturulmuş küçük bir tokenin işleyişini ve amacını incelemek üzere hazırlanmıştır. Bu token, okul projesi kapsamında oluşturulmuş olup, Ethereum ağında dijital bir varlık olarak işlem görebilir. Bu projede, tokenin temel özellikleri (örneğin, transfer işlemleri, sahiplik) ve blok zincir teknolojisi ile ilgili temel kavramlar ele alınmaktadır. Proje, öğrencilere merkeziyetsiz finans ve blok zincir teknolojisi alanında pratik bir deneyim sunmayı hedeflemektedir.",
            visionTitle: "Vizyon:",
            visionText: "Bu projenin vizyonu, blok zincir ve dijital varlıklar alanında daha derin bilgiye sahip, yenilikçi düşünebilen ve teknolojik gelişmelere ayak uydurabilen bireyler yetiştirmektir. Ethereum tabanlı bu proje ile öğrenciler, blockchain teknolojisinin sınırlarını keşfederek dijital finansın geleceğinde söz sahibi olma yetkinliği kazanacaklardır.",
            missionTitle: "Misyon:",
            missionText: "Bu projenin misyonu, öğrencilere blok zincir teknolojisinin temel prensiplerini öğretmek ve onların Ethereum gibi merkeziyetsiz platformlarda token geliştirme konusunda pratik bir deneyim kazanmalarını sağlamaktır. Proje, öğrencilerin dijital varlıklar ile ilgili anlayışlarını güçlendirmeyi, güvenli ve etkili bir şekilde token oluşturmayı öğrenmelerini hedefler.",
            footerText: "ACDcoin © 2024",
            langTurkish: "Türkçe",
            langEnglish: "İngilizce",
            // contact content
            contactTitle: "Bize Ulaşın",
            contactDesc: "Herhangi bir sorunuz varsa, bize ulaşmaktan çekinmeyin!",
            ceoTitle: "YÖNETİM KURULU BAŞKANI:",
            gmTitle: "GENEL MÜDÜR:",
            emailLabel: "E-posta:",
            phoneLabel: "Telefon numarası:",
            addressLabel: "Adres:",
        },
        en: {
            // about-us content
            title: "About Us - ACDcoin",
            headerTitle: "ACDcoin",
            navHome: "Home",
            navMining: "Mining",
            navAbout: "About Us",
            navContact: "Contact",
            navteam: "team",
            navTransactions: "Transactions",
            navDownload: "Download",
            aboutTitle: "About Us",
            aboutText: "This project is designed to explore the operation and purpose of a small token created on the Ethereum blockchain. The token was developed as part of a school project and can be traded as a digital asset on the Ethereum network. This project covers the basic features of the token (such as transfer transactions, ownership) and fundamental concepts related to blockchain technology. The goal of the project is to provide students with practical experience in decentralized finance and blockchain technology.",
            visionTitle: "Vision:",
            visionText: "The vision of this project is to cultivate individuals with a deeper understanding of blockchain and digital assets who can think innovatively and adapt to technological advancements. Through this Ethereum-based project, students will explore the limits of blockchain technology, gaining skills that empower them to have a voice in the future of digital finance.",
            missionTitle: "Mission:",
            missionText: "The mission of this project is to teach students the fundamental principles of blockchain technology and provide hands-on experience in developing tokens on decentralized platforms like Ethereum. This project aims to enhance students' understanding of digital assets, guiding them in learning to create tokens securely and effectively.",
            footerText: "ACDcoin © 2024",
            langTurkish: "Turkish",
            langEnglish: "English",
            // contact content
            contactTitle: "Contact Us",
            contactDesc: "If you have any questions, feel free to reach out to us!",
            ceoTitle: "CEO:",
            gmTitle: "General Manager:",
            emailLabel: "Email:",
            phoneLabel: "Phone:",
            addressLabel: "Address:",
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
    document.getElementById('branding').querySelector('h1 a').textContent = content[lang].headerTitle;
    document.querySelector('.nav-links li:nth-child(1) a').textContent = content[lang].navHome;
    document.querySelector('.nav-links li:nth-child(2) a').textContent = content[lang].navMining;
    document.querySelector('.nav-links li.dropdowns a').textContent = content[lang].navAbout;
    document.querySelector('.dropdown .element a').textContent = content[lang].navContact;
    document.querySelector('.dropdown ul li:nth-child(2) a').textContent = content[lang].navteam;
    document.querySelector('.nav-links li:nth-child(4) a').textContent = content[lang].navTransactions;
    document.querySelector('.nav-links li:nth-child(5) a').textContent = content[lang].navDownload;

    // About specific content
    document.querySelector('.main-content h1').textContent = content[lang].aboutTitle;
    document.querySelector('.aboutText p:first-of-type').textContent = content[lang].aboutText;
    document.querySelector('.aboutText h2:nth-of-type(1)').textContent = content[lang].visionTitle;
    document.querySelector('.aboutText p:nth-of-type(2)').textContent = content[lang].visionText;
    document.querySelector('.aboutText h2:nth-of-type(2)').textContent = content[lang].missionTitle;
    document.querySelector('.aboutText p:nth-of-type(3)').textContent = content[lang].missionText;
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
