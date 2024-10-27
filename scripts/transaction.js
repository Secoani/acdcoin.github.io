function validateForm(event) {
    event.preventDefault();
    const sender = document.getElementById('sender').value;
    const receiver = document.getElementById('receiver').value;
    const amount = document.getElementById('amount').value;
    if (!sender || !receiver || amount <= 0) {
        alert('Please fill out all fields correctly.');
    } else {
        alert('Transaction submitted!');
        // Submit the form or perform further actions here
    }
}