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
        alert('註冊成功，請登入');
        // Switch back to the login form after registration
        container.classList.remove('right-panel-active');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('登入成功，稍後返回主頁');
        window.location.href = 'index.html';
    });
});