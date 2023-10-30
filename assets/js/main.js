// Scroll Section Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(item => {
        let top = window.scrollY;
        let offset = item.offsetTop - 150;
        let height = item.offsetHeight;
        let id = item.getAttribute('id');

        if(top >= offset && top < height + offset) { 
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Remove Icon Navbar after clicking
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}