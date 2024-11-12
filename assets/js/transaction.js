// transaction.js

// Seçili dili ayarlayan fonksiyon
function setLanguage(lang) {
    // Burada dil içeriğini güncelleme kodlarını ekleyin
    if (lang === "tr") {
        document.querySelector("h1").innerText = "ACDcoin İşlem"; // Başlık güncellemesi
        document.querySelector(".back-button").innerHTML = "Geri";
        document.querySelector('label[for="sender"]').innerHTML =
            'Gönderen Adresi <span class="tooltip">? <span class="tooltip-text">ACDcoin gönderen adresini girin.</span></span>';
        document.querySelector('label[for="receiver"]').innerHTML =
            'Alıcı Adresi <span class="tooltip">? <span class="tooltip-text">Alıcının adresini girin.</span></span>';
        document.querySelector('label[for="amount"]').innerHTML =
            'Miktar (ACDcoin) <span class="tooltip">? <span class="tooltip-text">Göndermek istediğiniz ACDcoin miktarını belirtin.</span></span>';
        document.querySelector('button[type="submit"]').innerText =
            "ACDcoin Gönder"; // Buton metni
    } else {
        document.querySelector("h1").innerText = "ACDcoin Transaction"; // Başlık güncellemesi
        document.querySelector(".back-button").innerHTML = "Back";
        document.querySelector('label[for="sender"]').innerHTML =
            'Sender Address <span class="tooltip">? <span class="tooltip-text">Enter the address sending the ACDcoin.</span></span>';
        document.querySelector('label[for="receiver"]').innerHTML =
            'Receiver Address <span class="tooltip">? <span class="tooltip-text">Enter the recipient\'s address.</span></span>';
        document.querySelector('label[for="amount"]').innerHTML =
            'Amount (ACDcoin) <span class="tooltip">? <span class="tooltip-text">Specify the amount of ACDcoin to send.</span></span>';
        document.querySelector('button[type="submit"]').innerText =
            "Send ACDcoin"; // Buton metni
    }
}
// Form doğrulama fonksiyonu
function validateForm(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

    const sender = document.getElementById("sender").value.trim();
    const receiver = document.getElementById("receiver").value.trim();
    const amount = parseFloat(document.getElementById("amount").value);

    const addressRegex = /^0x[a-fA-F0-9]{40}$/; // Geçerli bir Ethereum adresi için regex

    if (!addressRegex.test(sender)) {
        alert("Lütfen geçerli bir gönderen adresi girin."); // Geçersiz gönderici adresi uyarısı
    } else if (!addressRegex.test(receiver)) {
        alert("Lütfen geçerli bir alıcı adresi girin."); // Geçersiz alıcı adresi uyarısı
    } else if (isNaN(amount) || amount <= 0) {
        alert("Lütfen sıfırdan büyük geçerli bir miktar girin."); // Geçersiz miktar uyarısı
    } else {
        alert("İşlem gönderildi!"); // Başarılı işlem uyarısı
        // Transaction işlemi buraya kodlanacak
    }
}
