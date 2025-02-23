document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinksContainer = document.querySelector(".nav-links-container");

    mobileMenu.addEventListener("click", () => {
        navLinksContainer.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
});