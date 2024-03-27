// toggle navbar
let menuIcon = document.querySelector('#header-menu');
let navbar = document.querySelector('.header__navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
    
}



// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //active navbar
            navLinks.forEach(links => {
                links.classList.remove('navbar-link__active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('navbar-link__active');
            });
            // active action animation scroll
            sec.classList.add('show-animate');
        }
        // Repeat animation so use this
        else {
            sec.classList.remove('show-animate');
        }
    });


    // sticky header (erroring)
    let header = document.querrySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //Remove toggle and navbar when click links navbar
}