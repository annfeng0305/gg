document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.querySelector('.container');

    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });

    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = registerForm.querySelector('input[type="text"]').value;
        const email = registerForm.querySelector('input[type="email"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;
        
        // Save user data to local storage
        localStorage.setItem('user', JSON.stringify({ name, email }));
        
        alert('註冊成功，請登入');
        container.classList.remove('right-panel-active');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        
        // Check if user exists in local storage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === email) {
            alert('登入成功，稍後返回主頁');
            window.location.href = 'profile.html'; // Replace 'profile.html' with your actual profile page URL
        } else {
            alert('電子郵件不正確');
        }
    });
});