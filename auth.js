document.addEventListener('DOMContentLoaded', function() {
    // Login form handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Add your login logic here
            console.log('Login attempt:', email);
            
            // Redirect to dashboard on successful login
            window.location.href = 'index.html';
        });
    }
    
    // Signup form handling
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // Validate passwords match
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Add your signup logic here
            console.log('Signup attempt:', email);
            
            // Redirect to dashboard on successful signup
            window.location.href = 'index.html';
        });
    }
    
    // Forgot password form handling
    const forgotForm = document.getElementById('forgot-form');
    if (forgotForm) {
        forgotForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            
            // Add your password reset logic here
            console.log('Password reset requested for:', email);
            
            // Show success message
            alert('Password reset instructions have been sent to your email.');
            
            // Redirect to login page
            window.location.href = 'login.html';
        });
    }
}); 