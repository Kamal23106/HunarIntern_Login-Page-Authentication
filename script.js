document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // For simplicity, we're using hardcoded credentials.
    const validUsername = 'user';
    const validPassword = 'pass';

    if (username === validUsername && password === validPassword) {
        message.textContent = 'Login successful!';
        message.className = 'success';
    } else {
        message.textContent = 'Invalid username or password.';
        message.className = 'error';
    }
});
