/**
 * Main JavaScript for Natak Mesh Website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            const open = navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            
            // Animate hamburger to X
            const spans = menuToggle.querySelectorAll('span');
            if (spans.length === 3) {
                spans[0].classList.toggle('rotate-down');
                spans[1].classList.toggle('fade-out');
                spans[2].classList.toggle('rotate-up');
            }
        });
    }
    
    // Shop links now carry the real URL in the HTML (site.shop_url in _config.yml).

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip bare "#" links
            if (href === '#') {
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
    
    // The active nav item is set at build time (page `nav:` front matter).
});
