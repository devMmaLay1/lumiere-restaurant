/**
 * LUMIÈRE — RESERVATIONS PAGE
 * Handles hero animations, form interactions, Flatpickr, guest stepper, validation
 */

(function() {
    'use strict';

    // Wait for page loader to complete
    window.addEventListener('load', function() {
        initReservationsHeroAnimations();
        initFormSectionAnimations();
        initPoliciesSectionAnimations();
        initPrivateDiningAnimations();
        initGuestStepper();
        initCustomSelects();
        initCharacterCounter();
        initFlatpickr();
        initTodayHighlight();
        initFormSubmission();
    });

    /**
     * Hero Section Animations
     * Sequence: breadcrumb → label → heading → subheading → trust items → separator
     */
    function initReservationsHeroAnimations() {
        const breadcrumb = document.getElementById('reservations-breadcrumb');
        const label = document.getElementById('reservations-hero-label');
        const heading = document.getElementById('reservations-hero-heading');
        const subheading = document.getElementById('reservations-hero-subheading');
        const trustItems = document.getElementById('reservations-trust-items');
        const separator = document.getElementById('reservations-hero-separator');

        if (!breadcrumb || !label || !heading || !subheading || !trustItems || !separator) {
            return;
        }

        // Create timeline
        const tl = gsap.timeline({
            delay: 0.3 // Start after page loader exits
        });

        // 1. Breadcrumb fades in (0.3s)
        tl.to(breadcrumb, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, 0.3);

        // 2. Label fades up (0.5s)
        tl.to(label, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, 0.5);

        // 3. Heading line reveal (0.7s)
        // Split text into lines for reveal animation
        const headingText = heading.textContent;
        heading.innerHTML = `<span class="line-wrap"><span class="line-inner">${headingText}</span></span>`;
        
        tl.to(heading.querySelector('.line-inner'), {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: 'power3.out'
        }, 0.7);

        // 4. Subheading fades up (1.0s)
        tl.to(subheading, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, 1.0);

        // 5. Trust items fade in together (1.2s)
        tl.to(trustItems, {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        }, 1.2);

        // 6. Separator draws from center (1.4s)
        tl.to(separator, {
            scaleX: 1,
            duration: 1.0,
            ease: 'power2.inOut'
        }, 1.4);
    }

    /**
     * Form Section Animations
     * Form card slides in from left, info blocks stagger in from right
     */
    function initFormSectionAnimations() {
        const formCard = document.getElementById('reservation-form-card');
        const infoBlocks = [
            document.getElementById('info-block-1'),
            document.getElementById('info-block-2'),
            document.getElementById('info-block-3'),
            document.getElementById('info-block-4')
        ].filter(Boolean);

        if (!formCard) return;

        // Form card slides in from left
        gsap.to(formCard, {
            scrollTrigger: {
                trigger: formCard,
                start: 'top 80%',
                once: true
            },
            opacity: 1,
            x: 0,
            duration: 1.0,
            ease: 'power3.out'
        });

        // Info blocks stagger in from right
        if (infoBlocks.length > 0) {
            gsap.to(infoBlocks, {
                scrollTrigger: {
                    trigger: formCard,
                    start: 'top 80%',
                    once: true
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out'
            });
        }
    }

    /**
     * Guest Stepper
     * Min: 1, Max: 12
     */
    function initGuestStepper() {
        const minusBtn = document.getElementById('stepper-minus');
        const plusBtn = document.getElementById('stepper-plus');
        const valueDisplay = document.getElementById('stepper-value');
        const hiddenInput = document.getElementById('guests');

        if (!minusBtn || !plusBtn || !valueDisplay || !hiddenInput) return;

        const MIN = 1;
        const MAX = 12;
        let currentValue = parseInt(hiddenInput.value) || 2;

        function updateStepper() {
            valueDisplay.textContent = currentValue;
            hiddenInput.value = currentValue;
            
            // Disable buttons at boundaries
            minusBtn.disabled = currentValue <= MIN;
            plusBtn.disabled = currentValue >= MAX;
        }

        minusBtn.addEventListener('click', function() {
            if (currentValue > MIN) {
                currentValue--;
                updateStepper();
            }
        });

        plusBtn.addEventListener('click', function() {
            if (currentValue < MAX) {
                currentValue++;
                updateStepper();
            }
        });

        // Initialize
        updateStepper();
    }

    /**
     * Custom Select Dropdowns
     * Handles time and occasion selects
     */
    function initCustomSelects() {
        const selects = document.querySelectorAll('.custom-select');

        selects.forEach(select => {
            const trigger = select.querySelector('.custom-select-trigger');
            const dropdown = select.querySelector('.custom-select-dropdown');
            const valueSpan = select.querySelector('.custom-select-value');
            const options = select.querySelectorAll('.custom-select-option');
            const hiddenInput = select.parentElement.querySelector('input[type="hidden"]');

            if (!trigger || !dropdown || !valueSpan || !hiddenInput) return;

            // Toggle dropdown
            trigger.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Close other selects
                document.querySelectorAll('.custom-select.open').forEach(s => {
                    if (s !== select) s.classList.remove('open');
                });
                
                select.classList.toggle('open');
            });

            // Select option
            options.forEach(option => {
                option.addEventListener('click', function() {
                    const value = this.getAttribute('data-value');
                    const text = this.textContent;
                    
                    // Update display
                    valueSpan.textContent = text;
                    valueSpan.classList.remove('placeholder');
                    hiddenInput.value = value;
                    
                    // Update selected state
                    options.forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                    
                    // Close dropdown
                    select.classList.remove('open');
                    
                    // Clear error if exists
                    const errorSpan = select.parentElement.querySelector('.form-error');
                    if (errorSpan) {
                        errorSpan.classList.remove('visible');
                        select.parentElement.classList.remove('has-error');
                    }
                });
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function() {
            document.querySelectorAll('.custom-select.open').forEach(select => {
                select.classList.remove('open');
            });
        });
    }

    /**
     * Character Counter for Special Requests Textarea
     */
    function initCharacterCounter() {
        const textarea = document.getElementById('special-requests');
        const counter = document.getElementById('char-count');

        if (!textarea || !counter) return;

        textarea.addEventListener('input', function() {
            const count = this.value.length;
            counter.textContent = count;
        });
    }

    /**
     * Flatpickr Date Picker
     * Dark theme, disable past dates
     */
    function initFlatpickr() {
        const dateInput = document.getElementById('date');
        if (!dateInput || typeof flatpickr === 'undefined') return;

        flatpickr(dateInput, {
            minDate: 'today',
            dateFormat: 'D, M j, Y',
            disableMobile: false,
            onChange: function(selectedDates, dateStr, instance) {
                // Clear error if exists
                const errorSpan = document.getElementById('error-date');
                if (errorSpan) {
                    errorSpan.classList.remove('visible');
                    dateInput.parentElement.classList.remove('has-error');
                }
            }
        });
    }

    /**
     * Highlight Today's Day in Opening Hours
     */
    function initTodayHighlight() {
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const today = days[new Date().getDay()];
        
        const todayRow = document.querySelector(`.hours-row[data-day="${today}"]`);
        if (todayRow) {
            todayRow.classList.add('today');
        }
    }

    /**
     * Policies Section Animations
     * Columns stagger left to right, icons scale before text
     */
    function initPoliciesSectionAnimations() {
        const columns = [
            document.getElementById('policy-column-1'),
            document.getElementById('policy-column-2'),
            document.getElementById('policy-column-3')
        ].filter(Boolean);

        if (columns.length === 0) return;

        columns.forEach((column, index) => {
            const icon = column.querySelector('.policy-icon');
            const heading = column.querySelector('.policy-heading');
            const text = column.querySelector('.policy-text');

            if (!icon || !heading || !text) return;

            // Create timeline for each column
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: column,
                    start: 'top 85%',
                    once: true
                },
                delay: index * 0.2 // Stagger delay
            });

            // Column slides in
            tl.to(column, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power2.out'
            });

            // Icon scales in first (micro stagger)
            tl.to(icon, {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: 'back.out(1.2)'
            }, '-=0.6');

            // Heading fades up
            tl.to(heading, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.3');

            // Text fades up
            tl.to(text, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.4');
        });
    }

    /**
     * Private Dining CTA Animations
     * Background parallax + content sequence
     */
    function initPrivateDiningAnimations() {
        const section = document.getElementById('private-dining-cta');
        const bg = section?.querySelector('.private-dining-bg');
        const ornament = document.getElementById('private-dining-ornament');
        const label = document.getElementById('private-dining-label');
        const heading = document.getElementById('private-dining-heading');
        const text = document.getElementById('private-dining-text');
        const buttons = document.getElementById('private-dining-buttons');

        if (!section || !bg) return;

        // Parallax background (20% scroll speed, desktop only)
        if (window.innerWidth >= 1024) {
            gsap.to(bg, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                },
                y: '20%',
                ease: 'none'
            });
        }

        // Content animations
        if (!ornament || !label || !heading || !text || !buttons) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 75%',
                once: true
            }
        });

        // Ornament fades in
        tl.to(ornament, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        });

        // Label fades up
        tl.to(label, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.3');

        // Heading line reveal
        const headingText = heading.textContent;
        heading.innerHTML = `<span class="line-wrap"><span class="line-inner">${headingText}</span></span>`;
        
        tl.to(heading.querySelector('.line-inner'), {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: 'power3.out'
        }, '-=0.4');

        // Text fades up
        tl.to(text, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.5');

        // Buttons scale in staggered
        const buttonElements = buttons.querySelectorAll('a');
        tl.to(buttonElements, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'back.out(1.5)'
        }, '-=0.4');
    }

    /**
     * Form Submission and Success Message
     * Handles validation, submission, and success overlay
     */
    function initFormSubmission() {
        const form = document.getElementById('reservation-form');
        const formCard = document.getElementById('reservation-form-card');
        const successCard = document.getElementById('reservation-success-card');
        const submitBtn = document.getElementById('submit-btn');
        const makeAnotherBtn = document.getElementById('make-another-btn');

        if (!form || !formCard || !successCard || !submitBtn) return;

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate form
            if (!validateForm()) {
                return;
            }

            // Show loading state
            const btnText = submitBtn.querySelector('.btn-text');
            const btnIcon = submitBtn.querySelector('.btn-icon');
            const btnLoader = submitBtn.querySelector('.btn-loader');

            btnText.textContent = 'Confirming...';
            btnIcon.style.display = 'none';
            btnLoader.style.display = 'block';
            submitBtn.disabled = true;

            // Simulate server response (1.5s)
            // TODO: Replace this timeout with actual API call or form service
            setTimeout(function() {
                showSuccessMessage();
            }, 1500);
        });

        // Make another reservation button
        if (makeAnotherBtn) {
            makeAnotherBtn.addEventListener('click', function() {
                resetForm();
            });
        }

        /**
         * Validate all form fields
         */
        function validateForm() {
            let isValid = true;

            // Full Name
            const fullName = document.getElementById('full-name');
            if (!fullName.value.trim() || fullName.value.trim().length < 2) {
                showError('full-name', 'Please enter your full name');
                isValid = false;
            } else {
                clearError('full-name');
            }

            // Email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            } else {
                clearError('email');
            }

            // Phone
            const phone = document.getElementById('phone');
            const phoneDigits = phone.value.replace(/\D/g, '');
            if (!phone.value.trim() || phoneDigits.length < 10) {
                showError('phone', 'Please enter a valid phone number');
                isValid = false;
            } else {
                clearError('phone');
            }

            // Guests (should always be valid due to stepper, but check anyway)
            const guests = document.getElementById('guests');
            const guestCount = parseInt(guests.value);
            if (!guestCount || guestCount < 1 || guestCount > 12) {
                showError('guests', 'Please select number of guests');
                isValid = false;
            } else {
                clearError('guests');
            }

            // Date
            const date = document.getElementById('date');
            if (!date.value.trim()) {
                showError('date', 'Please select a valid date');
                isValid = false;
            } else {
                clearError('date');
            }

            // Time
            const time = document.getElementById('time');
            if (!time.value.trim()) {
                showError('time', 'Please select a preferred time');
                isValid = false;
            } else {
                clearError('time');
            }

            return isValid;
        }

        /**
         * Show error message for a field
         */
        function showError(fieldId, message) {
            const field = document.getElementById(fieldId);
            const errorSpan = document.getElementById('error-' + fieldId);
            
            if (errorSpan) {
                errorSpan.textContent = message;
                errorSpan.classList.add('visible');
                
                // Animate error in
                gsap.to(errorSpan, {
                    opacity: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
            
            if (field) {
                field.parentElement.classList.add('has-error');
            }
        }

        /**
         * Clear error message for a field
         */
        function clearError(fieldId) {
            const field = document.getElementById(fieldId);
            const errorSpan = document.getElementById('error-' + fieldId);
            
            if (errorSpan) {
                gsap.to(errorSpan, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                    onComplete: function() {
                        errorSpan.classList.remove('visible');
                        errorSpan.textContent = '';
                    }
                });
            }
            
            if (field) {
                field.parentElement.classList.remove('has-error');
            }
        }

        /**
         * Show success message with animation
         */
        function showSuccessMessage() {
            // Get form values
            const fullName = document.getElementById('full-name').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time');
            const timeText = time.parentElement.querySelector('.custom-select-value').textContent;
            const guests = document.getElementById('guests').value;
            const occasion = document.getElementById('occasion');
            const occasionText = occasion.value ? 
                occasion.parentElement.querySelector('.custom-select-value').textContent : 
                'Not specified';

            // Populate summary
            document.getElementById('summary-name').textContent = fullName;
            document.getElementById('summary-date').textContent = date;
            document.getElementById('summary-time').textContent = timeText;
            document.getElementById('summary-guests').textContent = guests;
            document.getElementById('summary-occasion').textContent = occasionText;

            // Animation sequence
            const tl = gsap.timeline();

            // 1. Form card fades out (0.4s)
            tl.to(formCard, {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.inOut'
            });

            // 2. Show success card and fade in (0.5s)
            tl.call(function() {
                formCard.style.display = 'none';
                successCard.style.display = 'block';
            });

            tl.to(successCard, {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out'
            });

            // 3. Check icon scales with elastic bounce
            const successIcon = successCard.querySelector('.success-icon');
            tl.to(successIcon, {
                scale: 1,
                duration: 0.8,
                ease: 'elastic.out(1, 0.5)'
            }, '-=0.3');

            // 4. Heading line reveal
            const successHeading = successCard.querySelector('.success-heading');
            const headingText = successHeading.textContent;
            successHeading.innerHTML = `<span class="line-wrap"><span class="line-inner">${headingText}</span></span>`;
            
            tl.to(successHeading.querySelector('.line-inner'), {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.4');

            // 5. Success text fades in
            const successText = successCard.querySelector('.success-text');
            tl.to(successText, {
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.4');

            // 6. Booking summary rows stagger in
            const summaryRows = successCard.querySelectorAll('.summary-row');
            tl.to(summaryRows, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out'
            }, '-=0.2');

            // 7. Make another button fades in
            const makeAnotherButton = successCard.querySelector('.btn-secondary');
            tl.to(makeAnotherButton, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: 'back.out(1.5)'
            }, '-=0.2');
        }

        /**
         * Reset form and show it again
         */
        function resetForm() {
            const tl = gsap.timeline();

            // Success card fades out
            tl.to(successCard, {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.inOut'
            });

            // Show form card and fade in
            tl.call(function() {
                successCard.style.display = 'none';
                formCard.style.display = 'block';
                
                // Reset form fields
                form.reset();
                
                // Reset guest stepper to 2
                document.getElementById('guests').value = '2';
                document.getElementById('stepper-value').textContent = '2';
                
                // Reset custom selects
                document.querySelectorAll('.custom-select-value').forEach(val => {
                    if (val.closest('#time-select-wrapper')) {
                        val.textContent = 'Select time';
                        val.classList.add('placeholder');
                    } else if (val.closest('#occasion-select-wrapper')) {
                        val.textContent = 'Select occasion';
                        val.classList.add('placeholder');
                    }
                });
                
                document.querySelectorAll('.custom-select-option.selected').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // Reset hidden inputs
                document.getElementById('time').value = '';
                document.getElementById('occasion').value = '';
                
                // Reset character counter
                document.getElementById('char-count').textContent = '0';
                
                // Reset submit button
                const btnText = submitBtn.querySelector('.btn-text');
                const btnIcon = submitBtn.querySelector('.btn-icon');
                const btnLoader = submitBtn.querySelector('.btn-loader');
                btnText.textContent = 'Confirm Reservation';
                btnIcon.style.display = 'block';
                btnLoader.style.display = 'none';
                submitBtn.disabled = false;
                
                // Clear all errors
                document.querySelectorAll('.form-error.visible').forEach(err => {
                    err.classList.remove('visible');
                });
                document.querySelectorAll('.form-field.has-error').forEach(field => {
                    field.classList.remove('has-error');
                });
            });

            tl.to(formCard, {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
        }
    }

})();
