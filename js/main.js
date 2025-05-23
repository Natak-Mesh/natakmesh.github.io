/**
 * Main JavaScript for Natak Mesh Website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = menuToggle.querySelectorAll('span');
            if (spans.length === 3) {
                spans[0].classList.toggle('rotate-down');
                spans[1].classList.toggle('fade-out');
                spans[2].classList.toggle('rotate-up');
            }
        });
    }
    
    // Site is in dark mode by default - no toggle needed
    
    // Shop button - redirect to Odoo shop
    const shopButtons = document.querySelectorAll('.shop-button');
    
    shopButtons.forEach(button => {
        button.setAttribute('href', 'https://natak.odoo.com/shop');
        button.setAttribute('target', '_blank');
        button.setAttribute('rel', 'noopener noreferrer');
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or shop button
            if (href === '#' || this.classList.contains('shop-button')) {
                return;
            }
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add CSS class for menu toggle animation
    const style = document.createElement('style');
    style.textContent = `
        .menu-toggle span {
            transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .menu-toggle .rotate-down {
            transform: rotate(45deg) translate(5px, 5px);
        }
        .menu-toggle .fade-out {
            opacity: 0;
        }
        .menu-toggle .rotate-up {
            transform: rotate(-45deg) translate(5px, -5px);
        }
    `;
    document.head.appendChild(style);
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks2 = document.querySelectorAll('.nav-links a');
    
    navLinks2.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
