// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let hero_img = document.querySelector('.hero_img');
let rotating_circle = document.querySelector('.rotating_circle');
let home_content = document.querySelector('.home-content');
let home_image = document.querySelector('.home-img')
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// Define a function to handle animations// Define the reveal function

// scroll reveal
ScrollReveal({
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img , .block-1, .skills-div', {
    origin: 'left'
});
ScrollReveal().reveal('.home-content p, .about-content, .block-2', {
    origin: 'right'
});

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['FullStack Developer', 'Frontend Developer', 'React Developer', 'Web Developer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// JavaScript to control button behavior
const uxBtn = document.getElementById("uxBtn");
const uxLink = uxBtn.querySelector("a");

function updateButtonBehavior() {
  if (window.innerWidth < 1024) {
    uxBtn.classList.add("disabled");
    uxBtn.textContent = "Optimized for desktop viewing";
   
  } else {
    // Enable link for desktop
    uxBtn.classList.remove("disabled");
    uxLink.setAttribute("href", "https://harley-wmr2g74hc9.figweb.site/desktop/");
    uxBtn.textContent = "View my UX Portfolio Design";
  }
}


// Run on load
updateButtonBehavior();

// Run on resize
window.addEventListener("resize", updateButtonBehavior);


function adjustBoxHeights() {

    // Make hero_img height equal to its width
    hero_img.style.height = hero_img.offsetWidth + 'px';

    // Adjust the rotating circle's dimensions
    let hero_img_width = hero_img.offsetWidth;
    rotating_circle.style.width = (hero_img_width + 20) + 'px';
    rotating_circle.style.height = (hero_img_width + 20) + 'px';

    // Adjust the heights of service boxes
    const boxes = document.querySelectorAll('.services-box');
    let maxHeight = 0;

    // Calculate the max height among all .services-box elements
    boxes.forEach(box => {
        const boxHeight = box.offsetHeight;
        if (boxHeight > maxHeight) {
            maxHeight = boxHeight;
        }
    });

    // Set the max height to all .services-box elements
    boxes.forEach(box => {
        box.style.height = `${maxHeight}px`;
    });
}

// Call the function initially
adjustBoxHeights();

// Adjust the heights on window resize
window.addEventListener('resize', adjustBoxHeights);
