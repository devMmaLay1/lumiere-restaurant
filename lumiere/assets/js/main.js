/* ================================================
   LUMIÈRE - MAIN JS
   Entry point - Initializes all core functionality
   
   🔧 BUYER GUIDE:
   This file orchestrates the entire website initialization.
   You typically DON'T need to edit this file unless you want to:
   - Add new JavaScript libraries
   - Change animation settings
   - Modify initialization order
   
   For content changes, edit the HTML files instead.
   ================================================ */

/**
 * Main initialization function
 * Called when DOM is ready
 * 
 * 🔧 WHAT THIS DOES:
 * 1. Loads navbar and footer components
 * 2. Initializes scroll animations (AOS)
 * 3. Sets up GSAP for advanced animations
 * 4. Handles external links
 * 5. Monitors page performance
 */
async function initLumiere() {
    console.log('🌟 Lumière - Initializing...');
    
    // ============================================
    // STEP 1: LOAD COMPONENTS
    // Load navbar and footer first and wait for completion
    // ============================================
    
    if (typeof initComponentLoader === 'function') {
        await initComponentLoader();
        console.log('✓ Component loader initialized');
    } else {
        console.warn('⚠ Component loader not found');
    }
    
    
    // ============================================
    // STEP 2: INITIALIZE AOS (Scroll Animations)
    // 🔧 EDIT: Adjust animation settings below
    // ============================================
    
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,           // 🔧 EDIT: Animation speed in milliseconds (800 = 0.8 seconds)
            easing: 'ease-out-cubic', // 🔧 EDIT: Animation easing (ease, ease-in, ease-out, linear)
            once: true,              // 🔧 EDIT: true = animate once, false = animate every time
            offset: 100,             // 🔧 EDIT: Distance from viewport before animation starts (pixels)
            delay: 0,                // 🔧 EDIT: Delay before animation starts (milliseconds)
            anchorPlacement: 'top-bottom' // When element's top hits viewport's bottom
        });
        console.log('✓ AOS initialized');
    } else {
        console.warn('⚠ AOS not loaded');
    }
    
    
    // ============================================
    // STEP 3: INITIALIZE GSAP (if available)
    // ============================================
    
    if (typeof gsap !== 'undefined') {
        // Register ScrollTrigger plugin if available
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            console.log('✓ GSAP ScrollTrigger registered');
        }
        console.log('✓ GSAP ready');
    } else {
        console.warn('⚠ GSAP not loaded');
    }
    
    
    // ============================================
    // STEP 4: REFRESH AOS ON DYNAMIC CONTENT
    // ============================================
    
    // Refresh AOS after components load (navbar/footer)
    setTimeout(() => {
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }, 200);
    
    
    // ============================================
    // STEP 5: HANDLE EXTERNAL LINKS
    // ============================================
    
    // Open external links in new tab
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.href.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    
    // ============================================
    // STEP 6: LAZY LOADING IMAGES
    // ============================================
    
    // Native lazy loading is handled by loading="lazy" attribute
    // This is a fallback for browsers that don't support it
    if ('loading' in HTMLImageElement.prototype) {
        console.log('✓ Native lazy loading supported');
    } else {
        console.warn('⚠ Native lazy loading not supported, consider polyfill');
    }
    
    
    // ============================================
    // STEP 7: PERFORMANCE MONITORING
    // ============================================
    
    // Log page load time
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`✓ Page loaded in ${Math.round(loadTime)}ms`);
    });
    
    
    console.log('🌟 Lumière - Initialization complete');
}


/**
 * Wait for DOM to be ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLumiere);
} else {
    // DOM is already ready
    initLumiere();
}


/**
 * Handle page visibility changes
 * Pause/resume animations when tab is hidden/visible
 */
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden - pause animations
        if (window.lenis) {
            window.lenis.stop();
        }
    } else {
        // Page is visible - resume animations
        if (window.lenis) {
            window.lenis.start();
        }
        
        // Refresh AOS
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }
});


/**
 * Handle window resize
 * Refresh animations and recalculate positions
 */
let resizeTimer;
window.addEventListener('resize', () => {
    // Debounce resize events
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Refresh AOS
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
        
        // Refresh ScrollTrigger
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
        
        console.log('✓ Animations refreshed on resize');
    }, 250);
});


/**
 * Utility: Smooth scroll to element
 * 
 * 🔧 HOW TO USE:
 * scrollToElement('#section-id');           // Scroll to element
 * scrollToElement('#section-id', -150);     // Scroll with custom offset
 * 
 * @param {string} selector - CSS selector or element
 * @param {number} offset - Offset from top (default: -100)
 */
function scrollToElement(selector, offset = -100) {
    const element = typeof selector === 'string' 
        ? document.querySelector(selector) 
        : selector;
    
    if (!element) {
        console.warn(`Element not found: ${selector}`);
        return;
    }
    
    if (window.lenis) {
        // Use Lenis smooth scroll
        window.lenis.scrollTo(element, {
            offset: offset,
            duration: 1.5
        });
    } else {
        // Fallback to native smooth scroll
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition + offset,
            behavior: 'smooth'
        });
    }
}


/**
 * Utility: Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean}
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


/**
 * Utility: Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function}
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


/**
 * Utility: Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in ms
 * @returns {Function}
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}


// Export utilities to global scope
window.LumiereUtils = {
    scrollToElement,
    isInViewport,
    debounce,
    throttle
};