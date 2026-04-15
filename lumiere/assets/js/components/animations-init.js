/* ================================================
   LUMIÈRE - ANIMATIONS INITIALIZER
   Initialize AOS and GSAP scroll animations
   Used on: All pages
   ================================================ */

/**
 * Initialize AOS (Animate On Scroll)
 * Already initialized in main.js, but this provides page-specific overrides
 */
function initAOS() {
    if (typeof AOS === 'undefined') {
        console.warn('⚠ AOS not loaded');
        return;
    }
    
    // Refresh AOS to detect new elements
    AOS.refresh();
    
    console.log('✓ AOS refreshed');
}


/**
 * Initialize GSAP scroll animations
 * Custom scroll-triggered animations using GSAP and ScrollTrigger
 */
function initGSAPAnimations() {
    if (typeof gsap === 'undefined') {
        console.warn('⚠ GSAP not loaded');
        return;
    }
    
    if (typeof ScrollTrigger === 'undefined') {
        console.warn('⚠ ScrollTrigger not loaded');
        return;
    }
    
    // ============================================
    // FADE IN UP ANIMATION
    // Elements with class .gsap-fade-up
    // ============================================
    
    const fadeUpElements = document.querySelectorAll('.gsap-fade-up');
    
    fadeUpElements.forEach((element, index) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'top 60%',
                toggleActions: 'play none none reverse',
                // markers: true  // 🔧 EDIT: Uncomment for debugging
            },
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: index * 0.1  // Stagger effect
        });
    });
    
    // ============================================
    // FADE IN LEFT ANIMATION
    // Elements with class .gsap-fade-left
    // ============================================
    
    const fadeLeftElements = document.querySelectorAll('.gsap-fade-left');
    
    fadeLeftElements.forEach((element, index) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            x: -60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: index * 0.1
        });
    });
    
    // ============================================
    // FADE IN RIGHT ANIMATION
    // Elements with class .gsap-fade-right
    // ============================================
    
    const fadeRightElements = document.querySelectorAll('.gsap-fade-right');
    
    fadeRightElements.forEach((element, index) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            x: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: index * 0.1
        });
    });
    
    // ============================================
    // SCALE UP ANIMATION
    // Elements with class .gsap-scale
    // ============================================
    
    const scaleElements = document.querySelectorAll('.gsap-scale');
    
    scaleElements.forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: 'back.out(1.7)'
        });
    });
    
    // ============================================
    // PARALLAX EFFECT
    // Elements with class .gsap-parallax
    // ============================================
    
    const parallaxElements = document.querySelectorAll('.gsap-parallax');
    
    parallaxElements.forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1  // Smooth scrubbing
            },
            y: -100,
            ease: 'none'
        });
    });
    
    // ============================================
    // STAGGER CHILDREN ANIMATION
    // Parent elements with class .gsap-stagger
    // Animates all direct children with stagger
    // ============================================
    
    const staggerParents = document.querySelectorAll('.gsap-stagger');
    
    staggerParents.forEach((parent) => {
        const children = parent.children;
        
        gsap.from(children, {
            scrollTrigger: {
                trigger: parent,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        });
    });
    
    // ============================================
    // TEXT REVEAL ANIMATION
    // Elements with class .gsap-text-reveal
    // ============================================
    
    const textRevealElements = document.querySelectorAll('.gsap-text-reveal');
    
    textRevealElements.forEach((element) => {
        // Split text into words
        const text = element.textContent;
        const words = text.split(' ');
        element.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
        
        const wordElements = element.querySelectorAll('.word');
        
        gsap.from(wordElements, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.05,
            ease: 'power2.out'
        });
    });
    
    // ============================================
    // PIN SECTION (Sticky scroll)
    // Elements with class .gsap-pin
    // ============================================
    
    const pinElements = document.querySelectorAll('.gsap-pin');
    
    pinElements.forEach((element) => {
        ScrollTrigger.create({
            trigger: element,
            start: 'top top',
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false
        });
    });
    
    console.log('✓ GSAP animations initialized');
}


/**
 * Initialize image reveal animations
 * Images fade in and scale up when scrolled into view
 */
function initImageReveal() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        return;
    }
    
    const images = document.querySelectorAll('.reveal-image');
    
    images.forEach((image) => {
        gsap.from(image, {
            scrollTrigger: {
                trigger: image,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            scale: 1.2,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        });
    });
}


/**
 * Initialize all animations
 * Call this function on page load
 */
function initAllAnimations() {
    initAOS();
    initGSAPAnimations();
    initImageReveal();
    
    console.log('✓ All animations initialized');
}


/**
 * Refresh all animations
 * Call this after dynamic content is added
 */
function refreshAnimations() {
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
    
    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
    }
    
    console.log('✓ Animations refreshed');
}


// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initAOS,
        initGSAPAnimations,
        initImageReveal,
        initAllAnimations,
        refreshAnimations
    };
}
