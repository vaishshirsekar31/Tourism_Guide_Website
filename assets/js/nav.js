document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");

    // Function to update the active class
    function setActiveLink(target) {
        navLinks.forEach(nav => nav.classList.remove("active")); // Remove active class from all links
        target.classList.add("active"); // Add active class to the clicked link
    }

    // Add click event to all nav links
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            // Prevent default scrolling behavior
            event.preventDefault();

            // Smooth scroll to the section
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });

            // Update the active class
            setActiveLink(link);
        });
    });

    // Highlight link based on scroll position
    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for sticky navbar
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});
