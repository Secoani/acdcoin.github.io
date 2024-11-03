// mining.js
function setLanguage(lang) {
    const content = {
        tr: {
            title: "ACDcoin Madencilik",
            headerTitle: "ACDcoın",
            navHome: "Ana Sayfa",
            navMining: "Madencilik",
            navAbout: "Hakkımızda",
            navContact: "İletişim",
            navTeam: "Ekip",
            navTransactions: "İşlemler",
            navDownload: "İndir",
            miningTitle: "ACDcoin Madenciliğine Bugün Başlayın",
            miningDesc: "Devrime katılın ve son teknoloji madencilik platformumuzla ACDcoin madenciliğine başlayın.",
            whyMiningTitle: "Neden ACDcoin Madenciliği?",
            whyMiningDesc: "ACDcoin hızlı işlemler, düşük ücretler ve güvenli bir ağ sunan devrim niteliğinde bir kripto para birimidir. ACDcoin madenciliği yaparak, ödüller kazanırken ağın güvenliğine ve merkezsizleşmesine katkıda bulunursunuz.",
            howToStartTitle: "Nasıl Başlanır",
            howToStartDesc: "ACDcoin madenciliğine başlamak kolaydır. Aşağıdaki adımları izleyin:",
            steps: [
                "ACDcoin madencilik yazılımını indirin ve kurun.",
                "Bir madencilik havuzuna katılın veya tek başınıza madenciliğe başlayın.",
                "Madencilik yazılımınızı cüzdan adresinizle yapılandırın.",
                "Madenciliğe başlayın ve ACDcoin ödülleri kazanın."
            ],
            footerText: "ACDcoin &copy; 2024",
            langTurkish: "Türkçe",
            langEnglish: "İngilizce"
        },
        en: {
            title: "ACDcoin Mining",
            headerTitle: "ACDcoin",
            navHome: "Home",
            navMining: "Mining",
            navAbout: "About Us",
            navContact: "Contact",
            navTeam: "Team",
            navTransactions: "Transactions",
            navDownload: "Download",
            miningTitle: "Start Mining ACDcoin Today",
            miningDesc: "Join the revolution and start mining ACDcoin with our state-of-the-art mining platform.",
            whyMiningTitle: "Why You Should Mine ACDcoin?",
            whyMiningDesc: "ACDcoin is a revolutionary cryptocurrency offering fast transactions, low fees, and a secure network. By mining ACDcoin, you contribute to the network's security and decentralization while earning rewards.",
            howToStartTitle: "How to Get Started with Mining?",
            howToStartDesc: "Getting started with ACDcoin mining is easy. Follow these steps:",
            steps: [
                "Download and install the ACDcoin mining software.",
                "Join a mining pool or start mining solo.",
                "Configure your mining software with your wallet address.",
                "Start mining and earn ACDcoin rewards."
            ],
            footerText: "ACDcoin &copy; 2024",
            langTurkish: "Turkish",
            langEnglish: "English"
        }
    };

    
    const langSelect = document.querySelector('.language');
    langSelect.querySelector('option[value="tr"]').textContent = content[lang].langTurkish;
    langSelect.querySelector('option[value="en"]').textContent = content[lang].langEnglish;


    document.title = content[lang].title;
    document.getElementById('branding').querySelector('h1 a').textContent = content[lang].headerTitle;
    document.querySelector('.nav-links li:nth-child(1) a').textContent = content[lang].navHome;
    document.querySelector('.nav-links li:nth-child(2) a').textContent = content[lang].navMining;
    document.querySelector('.nav-links li.dropdowns a').textContent = content[lang].navAbout;
    document.querySelector('.dropdown .element a').textContent = content[lang].navContact;
    document.querySelector('.dropdown ul li:nth-child(2) a').textContent = content[lang].navTeam;
    document.querySelector('.nav-links li:nth-child(4) a').textContent = content[lang].navTransactions;
    document.querySelector('.nav-links li:nth-child(5) a').textContent = content[lang].navDownload;

    // Mining specific content
    document.querySelector('.mining.container h1').textContent = content[lang].miningTitle;
    document.querySelector('.mining.container p').textContent = content[lang].miningDesc;
    document.querySelector('.content.container h1:first-of-type').textContent = content[lang].whyMiningTitle;
    document.querySelector('.content.container p:first-of-type').textContent = content[lang].whyMiningDesc;
    document.querySelector('.content.container h1:last-of-type').textContent = content[lang].howToStartTitle;
    document.querySelector('.content.container p:nth-of-type(2)').textContent = content[lang].howToStartDesc;

    const steps = document.querySelectorAll('.content.container ul li');
    content[lang].steps.forEach((step, index) => {
        steps[index].textContent = step;
    });

    document.querySelector('footer p').textContent = content[lang].footerText;
}

function changeLanguage(lang) {
    setLanguage(lang);
    localStorage.setItem('language', lang);
}