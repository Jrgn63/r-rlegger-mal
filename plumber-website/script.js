// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        offset: 100,
        easing: 'ease-out',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom'
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Contact form submission (basic client-side validation and alert)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Takk for din melding! Vi kontakter deg snart.');
    contactForm.reset();
});

// Testimonials carousel functionality
const carouselTrack = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.indicator');
const testimonialCards = carouselTrack.querySelectorAll('.testimonial-card');

let currentIndex = 0;
const totalSlides = 5; // number of unique testimonials
const slideWidthPercent = 33.3333; // 3 testimonials visible

function updateCarousel() {
    // Calculate translateX percentage
    const translateXPercent = -currentIndex * slideWidthPercent;
    carouselTrack.style.transform = `translateX(${translateXPercent}%)`;

    // Update active class on testimonial cards
    testimonialCards.forEach((card, index) => {
        card.classList.remove('active');
    });
    // The middle card is the one in focus: index currentIndex + 1 (since 3 visible)
    let activeIndex = currentIndex + 1;
    if (activeIndex >= testimonialCards.length) {
        activeIndex = activeIndex % testimonialCards.length;
    }
    testimonialCards[activeIndex].classList.add('active');

    // Update indicators
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentIndex].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateCarousel();
});

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        currentIndex = parseInt(indicator.getAttribute('data-slide'));
        updateCarousel();
    });
});

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCarousel();
});

// Employees carousel functionality
const empCarouselTrack = document.getElementById('empCarouselTrack');
const empPrevBtn = document.getElementById('empPrevBtn');
const empNextBtn = document.getElementById('empNextBtn');
const empIndicators = document.querySelectorAll('.carousel-indicators .indicator');

let empCurrentIndex = 0;
const empTotalSlides = 5; // number of unique employees
const empSlideWidthPercent = 33.3333; // 3 employees visible

function updateEmpCarousel() {
    // Calculate translateX percentage
    const translateXPercent = -empCurrentIndex * empSlideWidthPercent;
    empCarouselTrack.style.transform = `translateX(${translateXPercent}%)`;

    // Update active class on employee cards
    const empCards = empCarouselTrack.querySelectorAll('.employee-card');
    empCards.forEach(card => card.classList.remove('active'));
    // The middle card is the one in focus: index empCurrentIndex + 1 (since 3 visible)
    let activeIndex = empCurrentIndex + 1;
    if (activeIndex >= empCards.length) {
        activeIndex = activeIndex % empCards.length;
    }
    empCards[activeIndex].classList.add('active');

    // Update indicators
    empIndicators.forEach(indicator => indicator.classList.remove('active'));
    empIndicators[empCurrentIndex].classList.add('active');
}

empPrevBtn.addEventListener('click', () => {
    empCurrentIndex--;
    if (empCurrentIndex < 0) {
        empCurrentIndex = empTotalSlides - 1;
    }
    updateEmpCarousel();
});

empNextBtn.addEventListener('click', () => {
    empCurrentIndex++;
    if (empCurrentIndex >= empTotalSlides) {
        empCurrentIndex = 0;
    }
    updateEmpCarousel();
});

empIndicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        empCurrentIndex = parseInt(indicator.getAttribute('data-slide'));
        updateEmpCarousel();
    });
});

// Initialize employee carousel on page load
document.addEventListener('DOMContentLoaded', () => {
    updateEmpCarousel();
});
