let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Message sent!");
    });

    // Handle resume download
    const resumeButton = document.querySelector('.btn[href$="Resume"]');
    resumeButton.addEventListener('click', function(event) {
        const resumePath = "path/to/Yash-Tolani-Resume.pdf";  // Update with the correct path
        const a = document.createElement('a');
        a.href = resumePath;
        a.download = "Yash-Tolani-Resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
