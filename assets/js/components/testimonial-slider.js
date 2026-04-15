/* ================================================
   LUMIÈRE - TESTIMONIAL SLIDER COMPONENT
   Swiper.js carousel for testimonials
   Used on: Homepage
   
   🔧 BUYER GUIDE:
   This creates the testimonial slider/carousel.
   
   🔧 TO CUSTOMIZE:
   - Edit testimonial content in your HTML file
   - Adjust slider settings in defaultOptions below
   - Change autoplay speed, transition effects, etc.
   
   🔧 COMMON CUSTOMIZATIONS:
   - Autoplay delay: Change delay value (in milliseconds)
   - Transition speed: Change speed value
   - Effect: Change effect to 'slide', 'fade', 'cube', 'flip'
   ================================================ */

/**
 * Initialize testimonial slider
 * @param {string} selector - CSS selector for slider container (default: '.testimonial-slider')
 * @param {Object} customOptions - Custom Swiper options to override defaults
 */
function initTestimonialSlider(selector = '.testimonial-slider', customOptions = {}) {
    // Check if Swiper is available
    if (typeof Swiper === 'undefined') {
        console.warn('⚠ Swiper.js not loaded');
        return null;
    }
    
    // Find slider container
    const sliderContainer = document.querySelector(selector);
    
    if (!sliderContainer) {
        console.log('ℹ Testimonial slider not found on this page');
        return null;
    }
    
    // Default Swiper configuration
    // 🔧 EDIT: Customize slider behavior here
    const defaultOptions = {
        // Slides
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        
        // 🔧 EDIT: Autoplay settings
        autoplay: {
            delay: 5000,              // 🔧 EDIT: Time between slides (milliseconds)
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        
        // 🔧 EDIT: Transition speed
        speed: 800,  // Milliseconds
        
        // 🔧 EDIT: Transition effect ('slide', 'fade', 'cube', 'flip', 'coverflow')
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        
        // Navigation
        navigation: {
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
        },
        
        // Pagination
        pagination: {
            el: '.testimonial-pagination',
            clickable: true,
            dynamicBullets: false,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            }
        },
        
        // Responsive breakpoints
        breakpoints: {
            // Mobile (default above)
            768: {
                // Tablet
                slidesPerView: 1,
                spaceBetween: 40
            },
            1024: {
                // Desktop
                slidesPerView: 1,
                spaceBetween: 50
            }
        },
        
        // Accessibility
        a11y: {
            enabled: true,
            prevSlideMessage: 'Previous testimonial',
            nextSlideMessage: 'Next testimonial',
            paginationBulletMessage: 'Go to testimonial {{index}}'
        },
        
        // Keyboard control
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        
        // Events
        on: {
            init: function () {
                console.log('✓ Testimonial slider initialized');
            },
            slideChange: function () {
                // Optional: Add custom behavior on slide change
            }
        }
    };
    
    // Merge custom options with defaults
    const options = { ...defaultOptions, ...customOptions };
    
    // Initialize Swiper
    const swiper = new Swiper(selector, options);
    
    return swiper;
}


/**
 * Initialize multiple sliders on the same page
 * @param {Array<{selector: string, options: Object}>} sliders - Array of slider configs
 */
function initMultipleSliders(sliders) {
    const swiperInstances = [];
    
    sliders.forEach(({ selector, options = {} }) => {
        const instance = initTestimonialSlider(selector, options);
        if (instance) {
            swiperInstances.push(instance);
        }
    });
    
    return swiperInstances;
}


/**
 * Destroy slider instance
 * @param {Object} swiperInstance - Swiper instance to destroy
 */
function destroySlider(swiperInstance) {
    if (swiperInstance && typeof swiperInstance.destroy === 'function') {
        swiperInstance.destroy(true, true);
        console.log('✓ Slider destroyed');
    }
}


// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initTestimonialSlider,
        initMultipleSliders,
        destroySlider
    };
}
