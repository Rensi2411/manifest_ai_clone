document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidePanel = document.querySelector('.side-panel');
    const closeBtn = document.querySelector('.close-btn');



    // Toggle side panel on hamburger menu click
    hamburgerMenu.addEventListener('click', function() {
        sidePanel.classList.toggle('open');
    });

    // Close side panel on close button click
    closeBtn.addEventListener('click', function() {
        sidePanel.classList.remove('open');
    });
    
    // Toggle submenu-3 on Product button click
    const productBtn = document.querySelector('.has-submenu-1 > a');
    const submenu3 = document.querySelector('.submenu-3');

    productBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        submenu3.classList.toggle('open');
    });

    // Toggle submenu-2 on Resources button click
    const resourcesBtn = document.querySelector('.has-submenu-1 > a');
    const submenu4 = document.querySelector('.submenu-2');

    resourcesBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        submenu4.classList.toggle('open');
    });

    // Close submenu-3 on ^ button click
    const closeSubmenu3Btn = document.querySelector('.submenu-3 .close-submenu-3');
    if (closeSubmenu3Btn) {
        closeSubmenu3Btn.addEventListener('click', function() {
            submenu3.classList.remove('open');
        });
    }
    document.addEventListener('DOMContentLoaded', function() {
        const openSubmenuButton = document.querySelector('.open-submenu-3');
        const submenu = document.querySelector('.submenu-3');
    
        openSubmenuButton.addEventListener('click', function() {
            submenu.classList.toggle('open');
        });
    });
    
    // Close submenu-2 on ^ button click
    const closeSubmenu4Btn = document.querySelector('.submenu-4 .close-submenu-4');
    if (closeSubmenu4Btn) {
        closeSubmenu4Btn.addEventListener('click', function() {
            submenu4.classList.remove('open');
        });
    }
});
