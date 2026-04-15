/* ================================================
   LUMIÈRE - SMOOTH SCROLL
   Initialize Lenis.js for smooth scrolling
   ================================================ */

/**
 * Initialize smooth scroll using Lenis.js
 */
function initSmoothScroll() {
    // Check if Lenis is loaded
    if (typeof Lenis === 'undefined') {
        console.warn('Lenis.js not loaded, smooth scroll disabled');
        return;
    }
    
    // Create Lenis instance
    const lenis = new Lenis({
        duration: 1.2,          // Animation duration in seconds
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
        direction: 'vertical',  // Scroll direction
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,     // Disable on touch devices for better performance
        touchMultiplier: 2,
        infinite: false
    });
    
    // Animation frame loop for Lenis
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    
    // ============================================
    // ANCHOR LINK SMOOTH SCROLL
    // ============================================
    
    // Handle anchor links (e.g., #about, #contact)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignore empty hash or just #
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Scroll to target using Lenis
                lenis.scrollTo(target, {
                    offset: -100, // Offset for fixed navbar
                    duration: 1.5
                });
            }
        });
    });
    
    
    // ============================================
    // GSAP SCROLLTRIGGER INTEGRATION
    // ============================================
    
    // Integrate Lenis with GSAP ScrollTrigger if available
    if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
        // Update ScrollTrigger on Lenis scroll
        lenis.on('scroll', () => {
            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.update();
            }
        });
    }
    
    
    // ============================================
    // STOP SCROLL ON CERTAIN INTERACTIONS
    // ============================================
    
    // Stop smooth scroll when user interacts with certain elements
    const stopScrollElements = document.querySelectorAll('input, textarea, select');
    
    stopScrollElements.forEach(element => {
        element.addEventListener('focus', () => {
            lenis.stop();
        });
        
        element.addEventListener('blur', () => {
            lenis.start();
        });
    });
    
    
    // ============================================
    // EXPOSE LENIS INSTANCE GLOBALLY
    // ============================================
    
    // Make Lenis instance available globally for other scripts
    window.lenis = lenis;
    
    console.log('✓ Smooth scroll initialized');
}


// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSmoothScroll);
} else {
    initSmoothScroll();
}