// transaction.js

// Seçili dili ayarlayan fonksiyon
function setLanguage(lang) {
    // Burada dil içeriğini güncelleme kodlarını ekleyin
    if (lang === 'tr') {
        document.querySelector('h1').innerText = 'ACDcoin İşlem'; // Başlık güncellemesi
        document.querySelector(".back-button").innerHTML = "Geri";
        document.querySelector('label[for="sender"]').innerHTML = 'Gönderen Adresi <span class="tooltip">? <span class="tooltip-text">ACDcoin gönderen adresini girin.</span></span>';
        document.querySelector('label[for="receiver"]').innerHTML = 'Alıcı Adresi <span class="tooltip">? <span class="tooltip-text">Alıcının adresini girin.</span></span>';
        document.querySelector('label[for="amount"]').innerHTML = 'Miktar (ACDcoin) <span class="tooltip">? <span class="tooltip-text">Göndermek istediğiniz ACDcoin miktarını belirtin.</span></span>';
        document.querySelector('button[type="submit"]').innerText = 'ACDcoin Gönder'; // Buton metni
    } else {
        document.querySelector('h1').innerText = 'ACDcoin Transaction'; // Başlık güncellemesi
        document.querySelector(".back-button").innerHTML = "Back";
        document.querySelector('label[for="sender"]').innerHTML = 'Sender Address <span class="tooltip">? <span class="tooltip-text">Enter the address sending the ACDcoin.</span></span>';
        document.querySelector('label[for="receiver"]').innerHTML = 'Receiver Address <span class="tooltip">? <span class="tooltip-text">Enter the recipient\'s address.</span></span>';
        document.querySelector('label[for="amount"]').innerHTML = 'Amount (ACDcoin) <span class="tooltip">? <span class="tooltip-text">Specify the amount of ACDcoin to send.</span></span>';
        document.querySelector('button[type="submit"]').innerText = 'Send ACDcoin'; // Buton metni
    }
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

// Sayfa yüklendiğinde dil parametresini kullanarak bağlantıları güncelle
function updateNavLinks(lang) {
    const links = document.querySelectorAll('a.back-button');
    links.forEach(link => {
        const url = new URL(link.href);
        url.searchParams.set('lang', lang); // `lang` parametresini ayarla veya güncelle
        link.href = url.toString(); // Güncellenmiş URL'yi at
    });
}

// Form doğrulama fonksiyonu
function validateForm(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

    const sender = document.getElementById('sender').value.trim();
    const receiver = document.getElementById('receiver').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);

    const addressRegex = /^0x[a-fA-F0-9]{40}$/; // Geçerli bir Ethereum adresi için regex

    if (!addressRegex.test(sender)) {
        alert('Lütfen geçerli bir gönderen adresi girin.'); // Geçersiz gönderici adresi uyarısı
    } else if (!addressRegex.test(receiver)) {
        alert('Lütfen geçerli bir alıcı adresi girin.'); // Geçersiz alıcı adresi uyarısı
    } else if (isNaN(amount) || amount <= 0) {
        alert('Lütfen sıfırdan büyük geçerli bir miktar girin.'); // Geçersiz miktar uyarısı
    } else {
        alert('İşlem gönderildi!'); // Başarılı işlem uyarısı
        // Transaction işlemi buraya kodlanacak
    }
}
