document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = e.target.getAttribute("href").substring(1);

            sections.forEach((section) => {
                section.style.display = "none";
            });

            document.getElementById(targetId).style.display = "block";
        });
    });
});