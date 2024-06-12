document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        window.location.href = 'index.html'; // Redirect to login page if user is not logged in
    } else {
        document.getElementById('userName').textContent = user.name;
        document.getElementById('userEmail').textContent = user.email;
    }

    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('user');
        window.location.href = 'index.html';
    });
});