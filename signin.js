document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can handle the form submission (e.g., validate, send to server)
    alert(`Email: ${email}\nPassword: ${password}`);
});
