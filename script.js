// Typewriter Effect
const words = ["AI", "IoT", "Software Development"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

const typeEffect = () => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        // Add one letter
        typingText.textContent += currentWord.charAt(charIndex);
        charIndex++;

        if (charIndex < currentWord.length) {
            setTimeout(typeEffect, 200);
        } else {
            // Pause at full word
            setTimeout(() => {
                isDeleting = true;
                typeEffect();
            }, 1200);
        }
    } else {
        // Remove one letter
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex > 0) {
            setTimeout(typeEffect, 100);
        } else {
            // Move to next word
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 200);
        }
    }
};

// Initialize the effect
window.onload = function() {
    setTimeout(typeEffect, 1000);
};


// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

