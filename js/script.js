// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidePanel = document.querySelector('.side-panel');
    const closeBtn = document.querySelector('.close-btn');

    hamburgerMenu.addEventListener('click', function() {
        sidePanel.classList.toggle('open');
    });

    closeBtn.addEventListener('click', function() {
        sidePanel.classList.remove('open');
    });
});
