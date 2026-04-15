/* ================================================
   LUMIÈRE - EVENTS PAGE
   Handles event type filters, enquiry form, and animations
   
   🔧 BUYER GUIDE:
   This file handles all Events page interactions:
   - Hero animations on page load
   - Scroll-triggered animations
   - Enquiry form with validation
   - Event type pre-selection
   - Custom select dropdowns
   - Guest number stepper
   - Character counter
   - Success message display
   
   🔧 TO CUSTOMIZE:
   - Form submission endpoint: Line 280
   - Animation timings: Lines 50-100
   - Guest min/max: Lines 350-380
   ================================================ */

/**
 * Initialize hero animations
 * Runs on page load after loader exits
 */
function initHeroAnimations() {
    // Check if GSAP is available
    if (typeof gsap === 'undefined') {
        console.warn('⚠ GSAP not loaded, hero animations disabled');
        return;
    }
    
    // Create hero animation timeline
    const heroTimeline = gsap.timeline({
        delay: 0.3 // Start after page loader exits
    });
    
    // Animation sequence
    heroTimeline
        // 0.3s: Breadcrumb fades in
        .from('#hero-breadcrumb', {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, 0.3)
        
        // 0.5s: Gold label fades up
        .from('#hero-label', {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out'
        }, 0.5)
        
        // 0.7s: Main heading line reveal (Animation 1)
        .from('#hero-heading', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out'
        }, 0.7)
        
        // 1.0s: Subheading fades up
        .from('#hero-subheading', {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out'
        }, 1.0)
        
        // 1.2s: Trust items fade in together
        .from('#hero-trust-items', {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, 1.2)
        
        // 1.4s: Gold line draws from center (scaleX)
        .from('#hero-line', {
            scaleX: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, 1.4);
    
    console.log('✓ Hero animations initialized');
}


/**
 * Initialize scroll-triggered animations
 * Uses GSAP ScrollTrigger for section animations
 */
function initScrollAnimations() {
    // Check if GSAP and ScrollTrigger are available
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('⚠ GSAP or ScrollTrigger not loaded, scroll animations disabled');
        return;
    }
    
    // Event Types Section Heading - Line reveal
    gsap.from('#event-types-heading', {
        scrollTrigger: {
            trigger: '#event-types-heading',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Event Types Intro - Fade up
    gsap.from('#event-types-intro', {
        scrollTrigger: {
            trigger: '#event-types-intro',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out'
    });
    
    // Private Dining Images - Slide from left
    gsap.from('#main-image', {
        scrollTrigger: {
            trigger: '#private-dining-feature',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Overlapping image - Scale in (desktop only)
    if (window.innerWidth >= 1025) {
        gsap.from('#overlay-image', {
            scrollTrigger: {
                trigger: '#private-dining-feature',
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            delay: 0.3,
            ease: 'power2.out'
        });
    }
    
    // Private Room Content - Stagger
    gsap.from('#private-room-label', {
        scrollTrigger: {
            trigger: '#private-dining-content',
            start: 'top 75%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
    });
    
    gsap.from('#private-room-heading', {
        scrollTrigger: {
            trigger: '#private-dining-content',
            start: 'top 75%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
    });
    
    gsap.from('#private-room-paragraph', {
        scrollTrigger: {
            trigger: '#private-dining-content',
            start: 'top 75%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.4,
        ease: 'power2.out'
    });
    
    // Upcoming Events Heading - Line reveal
    gsap.from('#upcoming-events-heading', {
        scrollTrigger: {
            trigger: '#upcoming-events-heading',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Enquiry Form Card - Slide from left
    gsap.from('#enquiry-form-card', {
        scrollTrigger: {
            trigger: '#enquiry-form-section',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    console.log('✓ Scroll animations initialized');
}


/**
 * Initialize custom select dropdowns
 * Handles event type, time, and budget selects
 */
function initCustomSelects() {
    // Get all custom select wrappers
    const selects = document.querySelectorAll('.custom-select');
    
    selects.forEach(select => {
        const trigger = select.querySelector('.custom-select-trigger');
        const dropdown = select.querySelector('.custom-select-dropdown');
        const valueDisplay = select.querySelector('.custom-select-value');
        const hiddenInput = select.parentElement.querySelector('input[type="hidden"]');
        const options = select.querySelectorAll('.custom-select-option');
        
        if (!trigger || !dropdown || !valueDisplay) return;
        
        // Toggle dropdown on trigger click
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Close other dropdowns
            document.querySelectorAll('.custom-select').forEach(s => {
                if (s !== select) s.classList.remove('active');
            });
            
            // Toggle this dropdown
            select.classList.toggle('active');
        });
        
        // Handle option selection
        options.forEach(option => {
            option.addEventListener('click', () => {
                const value = option.dataset.value;
                const text = option.textContent;
                
                // Update display
                valueDisplay.textContent = text;
                
                // Update hidden input
                if (hiddenInput) {
                    hiddenInput.value = value;
                }
                
                // Update selected state
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                
                // Close dropdown
                select.classList.remove('active');
                
                console.log(`Selected: ${text} (${value})`);
            });
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.custom-select').forEach(select => {
            select.classList.remove('active');
        });
    });
    
    console.log('✓ Custom selects initialized');
}


/**
 * Initialize guest number stepper
 * Min: 2, Max: 50, Default: 10
 */
function initGuestStepper() {
    const minusBtn = document.getElementById('stepper-minus');
    const plusBtn = document.getElementById('stepper-plus');
    const valueDisplay = document.getElementById('stepper-value');
    const hiddenInput = document.getElementById('guests');
    
    if (!minusBtn || !plusBtn || !valueDisplay || !hiddenInput) {
        console.warn('⚠ Guest stepper elements not found');
        return;
    }
    
    const MIN_GUESTS = 2;
    const MAX_GUESTS = 50;
    let currentValue = parseInt(hiddenInput.value) || 10;
    
    // Update display and button states
    function updateStepper() {
        valueDisplay.textContent = currentValue;
        hiddenInput.value = currentValue;
        
        // Disable buttons at min/max
        minusBtn.disabled = currentValue <= MIN_GUESTS;
        plusBtn.disabled = currentValue >= MAX_GUESTS;
    }
    
    // Decrease guests
    minusBtn.addEventListener('click', () => {
        if (currentValue > MIN_GUESTS) {
            currentValue--;
            updateStepper();
        }
    });
    
    // Increase guests
    plusBtn.addEventListener('click', () => {
        if (currentValue < MAX_GUESTS) {
            currentValue++;
            updateStepper();
        }
    });
    
    // Initialize
    updateStepper();
    
    console.log('✓ Guest stepper initialized');
}


/**
 * Initialize Flatpickr date picker
 * Dark luxury theme, disable past dates
 */
function initDatePicker() {
    // Check if Flatpickr is loaded
    if (typeof flatpickr === 'undefined') {
        console.warn('⚠ Flatpickr not loaded, date picker disabled');
        return;
    }
    
    const dateInput = document.getElementById('event-date');
    
    if (!dateInput) {
        console.warn('⚠ Date input not found');
        return;
    }
    
    // Initialize Flatpickr with dark luxury theme
    flatpickr(dateInput, {
        minDate: 'today',
        dateFormat: 'Y-m-d',
        disableMobile: true,
        onChange: function(selectedDates, dateStr) {
            console.log(`Date selected: ${dateStr}`);
        }
    });
    
    console.log('✓ Date picker initialized');
}


/**
 * Initialize character counter for textarea
 * Max: 600 characters
 */
function initCharacterCounter() {
    const textarea = document.getElementById('event-message');
    const counter = document.getElementById('char-count');
    
    if (!textarea || !counter) {
        console.warn('⚠ Textarea or counter not found');
        return;
    }
    
    const MAX_LENGTH = 600;
    
    // Update counter on input
    textarea.addEventListener('input', () => {
        const length = textarea.value.length;
        counter.textContent = length;
        
        // Prevent exceeding max length
        if (length >= MAX_LENGTH) {
            textarea.value = textarea.value.substring(0, MAX_LENGTH);
            counter.textContent = MAX_LENGTH;
        }
    });
    
    console.log('✓ Character counter initialized');
}


/**
 * Initialize event type pre-selection
 * Handles clicks on event type card buttons
 */
function initEventTypeButtons() {
    const enquiryButtons = document.querySelectorAll('.event-enquiry-btn');
    const formSection = document.getElementById('enquiry-form-section');
    const eventTypeSelect = document.getElementById('event-type-select');
    const eventTypeTrigger = document.getElementById('event-type-trigger');
    const eventTypeValue = eventTypeTrigger?.querySelector('.custom-select-value');
    
    if (!formSection) {
        console.warn('⚠ Form section not found');
        return;
    }
    
    enquiryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const eventType = button.dataset.eventType;
            
            // Smooth scroll to form
            if (window.lenis) {
                window.lenis.scrollTo(formSection, {
                    offset: -100,
                    duration: 1.5
                });
            } else {
                formSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Pre-select event type after scroll
            setTimeout(() => {
                if (eventTypeSelect && eventTypeValue) {
                    eventTypeSelect.value = eventType;
                    eventTypeValue.textContent = eventType;
                    
                    // Update selected option
                    const options = document.querySelectorAll('#event-type-dropdown .custom-select-option');
                    options.forEach(opt => {
                        if (opt.dataset.value === eventType) {
                            opt.classList.add('selected');
                        } else {
                            opt.classList.remove('selected');
                        }
                    });
                    
                    console.log(`Pre-selected event type: ${eventType}`);
                }
            }, 1000);
        });
    });
    
    console.log('✓ Event type buttons initialized');
}


/**
 * Handle form success
 * Shows success message with submitted data
 * @param {Object} data - Form data
 */
function handleFormSuccess(data) {
    const formCard = document.getElementById('enquiry-form-card');
    const successCard = document.getElementById('enquiry-success-card');
    
    if (!formCard || !successCard) {
        console.warn('⚠ Form or success card not found');
        return;
    }
    
    // Populate success message with submitted data
    document.getElementById('summary-name').textContent = data.fullName || '';
    document.getElementById('summary-event-type').textContent = data.eventType || '';
    document.getElementById('summary-date').textContent = data.eventDate || '';
    document.getElementById('summary-guests').textContent = data.guests || '';
    
    // Hide form card
    gsap.to(formCard, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
        onComplete: () => {
            formCard.style.display = 'none';
            successCard.style.display = 'block';
            
            // Show success card
            gsap.to(successCard, {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
            
            // Animate success icon with elastic bounce
            gsap.from('#success-icon', {
                scale: 0,
                duration: 0.8,
                ease: 'elastic.out(1, 0.5)',
                delay: 0.2
            });
            
            // Animate heading
            gsap.from('#success-heading', {
                opacity: 0,
                y: 20,
                duration: 0.6,
                delay: 0.4,
                ease: 'power2.out'
            });
            
            // Stagger summary rows
            gsap.from('.summary-row', {
                opacity: 0,
                y: 10,
                duration: 0.4,
                stagger: 0.1,
                delay: 0.6,
                ease: 'power2.out'
            });
        }
    });
    
    console.log('✓ Success message displayed');
}


/**
 * Reset form and show form card again
 */
function resetForm() {
    const formCard = document.getElementById('enquiry-form-card');
    const successCard = document.getElementById('enquiry-success-card');
    const form = document.getElementById('events-enquiry-form');
    
    if (!formCard || !successCard || !form) return;
    
    // Hide success card
    gsap.to(successCard, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
            successCard.style.display = 'none';
            formCard.style.display = 'block';
            
            // Show form card
            gsap.to(formCard, {
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            // Reset form fields
            form.reset();
            
            // Reset custom selects
            document.querySelectorAll('.custom-select-value').forEach(val => {
                val.textContent = val.closest('.custom-select').querySelector('.custom-select-option')?.textContent || 'Select';
            });
            
            // Reset guest stepper to default
            document.getElementById('stepper-value').textContent = '10';
            document.getElementById('guests').value = '10';
            
            // Reset character counter
            document.getElementById('char-count').textContent = '0';
            
            // Remove error states
            form.querySelectorAll('.error').forEach(field => {
                field.classList.remove('error');
            });
            
            console.log('✓ Form reset');
        }
    });
}


/**
 * Initialize enquiry form
 * Uses form-handler.js for validation and submission
 */
function initEnquiryForm() {
    // Check if form handler is available
    if (typeof initFormHandler !== 'function') {
        console.warn('⚠ Form handler not loaded');
        return;
    }
    
    // Initialize form handler with custom success handling
    // 🔧 BUYER: Set submitEndpoint to your API endpoint (e.g., Formspree URL)
    initFormHandler('#events-enquiry-form', {
        showSuccessMessage: false,  // We handle success message custom
        resetOnSuccess: false,       // We handle reset custom
        submitEndpoint: null,        // 🔧 EDIT: Add your form endpoint here
        onSuccess: handleFormSuccess // Custom success handler
    });
    
    // Initialize reset button
    const resetBtn = document.getElementById('submit-another-enquiry-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetForm);
    }
    
    console.log('✓ Enquiry form initialized');
}


/**
 * Main initialization function
 * Called when DOM is ready
 */
function init() {
    console.log('🌟 Events page - Initializing...');
    
    // Initialize all components
    initHeroAnimations();
    initScrollAnimations();
    initCustomSelects();
    initGuestStepper();
    initDatePicker();
    initCharacterCounter();
    initEventTypeButtons();
    initEnquiryForm();
    
    console.log('🌟 Events page - Initialization complete');
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
