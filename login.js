// Add event listener for form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Simple authentication (replace with actual validation in real implementation)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulate a simple authentication process
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to the main website
    } else {
        alert('Invalid username or password.');
    }
});

// Add event listeners for Register and Forgot Password buttons
document.getElementById('registerBtn').addEventListener('click', function() {
    window.location.href = 'register.html'; // Redirect to the register page
});

document.getElementById('forgotPasswordBtn').addEventListener('click', function() {
    window.location.href = 'forgot-password.html'; // Redirect to the forgot password page
});
