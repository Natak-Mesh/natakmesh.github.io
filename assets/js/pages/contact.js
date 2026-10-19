// Scripts for contact.html (moved from inline <script>)
// Contact page specific JavaScript
    document.addEventListener('DOMContentLoaded', function() {
        // Handle contact form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // In a real implementation, you would send the form data to a server
                // For now, we'll just show a success message
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            });
        }
        
        // FAQ accordion functionality
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                // Toggle active class on the question
                this.classList.toggle('active');
                
                // Toggle active class on the answer
                const answer = this.nextElementSibling;
                answer.classList.toggle('active');
            });
        });
    });
