// animations.js

// ========== Fade-In on Scroll ==========
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        threshold: 0.1
    };

    const fadeInOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    };

    const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });
});


// ========== Optional: Typing Animation ==========
function typeWriterEffect(text, elementId, delay = 100) {
    const targetElement = document.getElementById(elementId);
    let i = 0;

    function type() {
        if (i < text.length) {
            targetElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }

    if (targetElement) {
        targetElement.innerHTML = ""; // Clear previous content
        type();
    }
}

// Example usage:
// window.onload = () => {
//     typeWriterEffect("Welcome to My Portfolio!", "typing-header");
// };


// ========== Smooth Scroll to Anchors ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
