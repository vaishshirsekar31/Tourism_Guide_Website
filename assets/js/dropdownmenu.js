document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links-container');

    // Toggle the visibility of the navigation menu
    menuToggle.addEventListener('click', function () {
        navLinksContainer.classList.toggle('active');
    });

    // Optional: Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!navLinksContainer.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinksContainer.classList.remove('active');
        }
    });
});
