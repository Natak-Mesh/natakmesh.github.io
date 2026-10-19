// Scripts for data.html (moved from inline <script>)
// Accordion functionality
    document.addEventListener('DOMContentLoaded', function() {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                // Toggle active class on header
                this.classList.toggle('active');
                
                // Get the accordion content
                const content = this.nextElementSibling;
                
                // Toggle active class on content
                content.classList.toggle('active');
                
                // Toggle icon between + and -
                const icon = this.querySelector('.accordion-icon');
                if (this.classList.contains('active')) {
                    icon.textContent = '−';
                } else {
                    icon.textContent = '+';
                }
            });
        });
    });
