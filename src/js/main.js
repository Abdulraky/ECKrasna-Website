/* ========================
   E&C KRASNA SOLUTIONS
   Main JavaScript File
   ======================== */

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSmoothScroll();
    initializeFormValidation();
    initializeScrollAnimations();
    initializeNavbarScroll();
});

/* ========================
   NAVIGATION FUNCTIONALITY
   ======================== */

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Update active nav link based on scroll position
    updateActiveNavLink();
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSection = '';

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

/* ========================
   SMOOTH SCROLL NAVIGATION
   ======================== */

function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ========================
   NAVBAR SCROLL EFFECT
   ======================== */

function initializeNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(255, 193, 7, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop;
    });
}

/* ========================
   FORM VALIDATION & SUBMISSION
   ======================== */

function initializeFormValidation() {
    const contactForm = document.querySelector('.contact-form');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form inputs
        const nameInput = document.querySelector('input[name="name"]');
        const emailInput = document.querySelector('input[name="email"]');
        const messageInput = document.querySelector('textarea[name="message"]');
        const submitBtn = document.querySelector('.form-submit');

        // Validate form
        if (!validateForm(nameInput, emailInput, messageInput)) {
            showError('Please fill in all fields correctly');
            return;
        }

        // Simulate form submission
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        // Simulate API call
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = '#28a745';

            // Reset form
            contactForm.reset();

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = 'Send Message';
                submitBtn.style.background = '#ffc107';
                submitBtn.disabled = false;
            }, 3000);

            // Show success message
            showSuccess('Thank you for your message! We will get back to you soon.');
        }, 1500);
    });
}

function validateForm(nameInput, emailInput, messageInput) {
    // Validate name
    if (!nameInput.value.trim()) {
        nameInput.style.borderColor = '#e74c3c';
        return false;
    } else {
        nameInput.style.borderColor = '';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.style.borderColor = '#e74c3c';
        return false;
    } else {
        emailInput.style.borderColor = '';
    }

    // Validate message
    if (!messageInput.value.trim()) {
        messageInput.style.borderColor = '#e74c3c';
        return false;
    } else {
        messageInput.style.borderColor = '';
    }

    return true;
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-message error';
    errorDiv.style.cssText = `
        padding: 15px;
        background-color: #e74c3c;
        color: white;
        border-radius: 5px;
        margin-bottom: 20px;
        animation: slideInUp 0.3s ease-out;
    `;
    errorDiv.textContent = message;

    const contactForm = document.querySelector('.contact-form');
    contactForm.insertBefore(errorDiv, contactForm.firstChild);

    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-message success';
    successDiv.style.cssText = `
        padding: 15px;
        background-color: #28a745;
        color: white;
        border-radius: 5px;
        margin-bottom: 20px;
        animation: slideInUp 0.3s ease-out;
    `;
    successDiv.textContent = message;

    const contactForm = document.querySelector('.contact-form');
    contactForm.insertBefore(successDiv, contactForm.firstChild);

    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

/* ========================
   SCROLL ANIMATIONS
   ======================== */

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation classes based on element position
                const rect = entry.target.getBoundingClientRect();

                if (entry.target.classList.contains('team-member')) {
                    entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                } else if (entry.target.classList.contains('service-card')) {
                    entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                } else if (entry.target.classList.contains('testimonial-card')) {
                    entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                } else if (entry.target.classList.contains('about-card')) {
                    entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const elementsToObserve = document.querySelectorAll(
        '.team-member, .service-card, .testimonial-card, .about-card, .featured-item'
    );

    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
}

/* ========================
   PARALLAX EFFECT (Optional)
   ======================== */

function initializeParallax() {
    const heroImg = document.querySelector('.hero-img');

    if (!heroImg) return;

    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        heroImg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
}

/* ========================
   UTILITY FUNCTIONS
   ======================== */

// Lazy load images (optional)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Get scroll position (for custom implementations)
function getScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #ffc107;
        color: #000;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
    `;

    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', scrollToTop);

    scrollBtn.addEventListener('mouseover', function() {
        scrollBtn.style.transform = 'scale(1.1)';
        scrollBtn.style.backgroundColor = '#d4af37';
    });

    scrollBtn.addEventListener('mouseout', function() {
        scrollBtn.style.transform = 'scale(1)';
        scrollBtn.style.backgroundColor = '#ffc107';
    });
}

/* ========================
   KEYBOARD NAVIGATION
   ======================== */

document.addEventListener('keydown', function(event) {
    // Press 'Home' key to go to top
    if (event.key === 'Home') {
        scrollToTop();
    }

    // Press 'End' key to go to footer
    if (event.key === 'End') {
        window.scrollTo(0, document.body.scrollHeight);
    }
});

/* ========================
   TOUCH SUPPORT
   ======================== */

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    // Swipe from left to right (open menu)
    if (touchEndX > touchStartX + 50) {
        if (!navMenu.classList.contains('active')) {
            hamburger.classList.add('active');
            navMenu.classList.add('active');
        }
    }

    // Swipe from right to left (close menu)
    if (touchStartX > touchEndX + 50) {
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
}

/* ========================
   TABLE OF CONTENTS NAVIGATION
   ======================== */

function initializeTableOfContents() {
    const tocItems = document.querySelectorAll('.featured-item');

    tocItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h3');
            if (title) {
                const targetId = '#' + title.textContent.toLowerCase().replace(/\s+/g, '-');
                const targetSection = document.querySelector(targetId) ||
                                      document.querySelector('[id*="' + title.textContent.toLowerCase() + '"]');

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

/* ========================
   ACCESSIBILITY IMPROVEMENTS
   ======================== */

// Skip to main content link
function addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #ffc107;
        color: #000;
        padding: 8px;
        z-index: 100;
    `;

    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });

    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
}

/* ========================
   INITIALIZE ALL ON PAGE LOAD
   ======================== */

// Uncomment these if you want additional features
// initializeParallax();
// lazyLoadImages();
// addScrollToTopButton();
// addSkipLink();
// initializeTableOfContents();

/* ========================
   CONSOLE MESSAGES (Development)
   ======================== */

console.log('%cE&C KRASNA SOLUTIONS', 'color: #ffc107; font-size: 20px; font-weight: bold;');
console.log('%cWelcome! This is a professional corporate website.', 'color: #999999; font-size: 14px;');
