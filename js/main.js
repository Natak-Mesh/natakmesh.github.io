// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // CTA button action - Scroll to About section
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                window.scrollTo({
                    top: aboutSection.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
                
                // Highlight the About section briefly to draw attention
                aboutSection.classList.add('section-highlight');
                setTimeout(() => {
                    aboutSection.classList.remove('section-highlight');
                }, 1500);
            }
        });
    }
    
    // Simple form validation (can be expanded)
    const contactForm = document.querySelector('.contact-section form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            const messageInput = this.querySelector('textarea');
            
            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                alert('Please fill out all fields before submitting.');
                return;
            }
            
            // Here you would typically send the form data to a server
            // Since this is a static site, we'll just show a success message
            alert('Thank you for your message! This is a static form for demonstration purposes.\n\nYour message would be sent to: nathan@natakmesh.com');
            this.reset();
        });
    }
});
