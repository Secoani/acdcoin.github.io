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
