function validateForm(event) {
    event.preventDefault();

    const sender = document.getElementById('sender').value.trim();
    const receiver = document.getElementById('receiver').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);

    const addressRegex = /^0x[a-fA-F0-9]{40}$/;

    if (!addressRegex.test(sender)) {
        alert('Please enter a valid sender address.');
    } else if (!addressRegex.test(receiver)) {
        alert('Please enter a valid receiver address.');
    } else if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount greater than zero.');
    } else {
        alert('Transaction submitted!');
        // Gönderme sistemi burada olacak
    }
}
