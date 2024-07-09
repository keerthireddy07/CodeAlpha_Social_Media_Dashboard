document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout');
    const accountLinks = document.querySelector('.account-links');
    const feeds = document.querySelector('.feeds');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            // Simulate login process
            localStorage.setItem('user', JSON.stringify({ email }));
            loginForm.style.display = 'none';
            logoutButton.style.display = 'block';
            accountLinks.style.display = 'block';
        }
    });

    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('user');
        loginForm.style.display = 'block';
        logoutButton.style.display = 'none';
        accountLinks.style.display = 'none';
        feeds.style.display = 'none';
    });

    if (localStorage.getItem('user')) {
        loginForm.style.display = 'none';
        logoutButton.style.display = 'block';
        accountLinks.style.display = 'block';
    }

    document.getElementById('connect-facebook').addEventListener('click', function () {
        // Simulate connecting to Facebook
        localStorage.setItem('facebook', 'connected');
        loadFeed('facebook');
    });

    document.getElementById('connect-twitter').addEventListener('click', function () {
        // Simulate connecting to Twitter
        localStorage.setItem('twitter', 'connected');
        loadFeed('twitter');
    });

    document.getElementById('connect-instagram').addEventListener('click', function () {
        // Simulate connecting to Instagram
        localStorage.setItem('instagram', 'connected');
        loadFeed('instagram');
    });

    function loadFeed(platform) {
        const feedContainer = document.getElementById(`feed-${platform}`);
        if (localStorage.getItem(platform) === 'connected') {
            feedContainer.innerHTML = `<h3>${platform.charAt(0).toUpperCase() + platform.slice(1)} Feed</h3><p>Sample ${platform} content...</p>`;
            feeds.style.display = 'block';
        }
    }

    ['facebook', 'twitter', 'instagram'].forEach(platform => loadFeed(platform));
});
