/* ================================================
   LUMIÈRE - PAGE LOADER
   Loading animation on page load using GSAP
   
   🔧 BUYER GUIDE:
   This shows a loading screen with your logo when the page loads.
   
   🔧 TO DISABLE: Remove the page loader HTML from your pages:
   <div id="page-loader">...</div>
   
   🔧 TO CHANGE LOGO: Replace assets/images/brand/logo.webp
   
   🔧 TO ADJUST TIMING: Edit the delay value below
   ================================================ */

/**
 * Initialize page loader animation
 * Fades in logo, animates loading bar, then fades out
 */
function initPageLoader() {
    const loader = document.getElementById('page-loader');
    
    if (!loader) {
        console.warn('Page loader element not found');
        return;
    }
    
    // Wait for page to fully load
    window.addEventListener('load', () => {
        // Check if GSAP is loaded
        if (typeof gsap === 'undefined') {
            console.warn('GSAP not loaded, using fallback loader');
            fallbackLoader();
            return;
        }
        
        // GSAP timeline for loader animation
        const tl = gsap.timeline({
            onComplete: () => {
                // Remove loader from DOM after animation
                loader.remove();
            }
        });
        
        // Animate loader out
        tl.to(loader, {
            opacity: 0,
            duration: 0.5,
            delay: 0.5, // 🔧 EDIT: Change delay (in seconds) before loader disappears
            ease: 'power2.inOut'
        });
        
        console.log('✓ Page loader animation complete');
    });
}


/**
 * Fallback loader (if GSAP is not available)
 * Simple CSS transition
 */
function fallbackLoader() {
    const loader = document.getElementById('page-loader');
    
    if (!loader) return;
    
    // Add hidden class (uses CSS transition)
    setTimeout(() => {
        loader.classList.add('hidden');
        
        // Remove from DOM after transition
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 500);
}


// Initialize immediately
initPageLoader();