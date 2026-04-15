/**
 * CONTACT PAGE JAVASCRIPT
 * Handles all contact page specific animations and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ═══════════════════════════════════════════════════════════════
    // 1. HERO ANIMATIONS
    // ═══════════════════════════════════════════════════════════════
    
    const heroTimeline = gsap.timeline({ delay: 0.3 });
    
    // Breadcrumb fade in
    heroTimeline.from('#hero-breadcrumb', {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
    });
    
    // Gold label fade up
    heroTimeline.from('#hero-label', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out'
    }, '-=0.4');
    
    // Main heading line reveal (Animation 1)
    heroTimeline.from('#hero-heading', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.3');
    
    // Subheading fade up
    heroTimeline.from('#hero-subheading', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out'
    }, '-=0.4');
    
    // Trust items stagger
    heroTimeline.from('.trust-item', {
        opacity: 0,
        y: 15,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
    }, '-=0.3');
    
    // Gold separator line draw from centre
    heroTimeline.from('#hero-separator', {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.2');
    
    
    // ═══════════════════════════════════════════════════════════════
    // 2. CONTACT SECTION ANIMATIONS
    // ═══════════════════════════════════════════════════════════════
    
    // Three columns stagger (Animation 3)
    gsap.from('#contact-col-1', {
        scrollTrigger: {
            trigger: '#contact-details',
            start: 'top 75%'
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    gsap.from('#contact-col-2', {
        scrollTrigger: {
            trigger: '#contact-details',
            start: 'top 75%'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    gsap.from('#contact-col-3', {
        scrollTrigger: {
            trigger: '#contact-details',
            start: 'top 75%'
        },
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Column dividers draw from top to bottom
    gsap.from('.contact-column-divider', {
        scrollTrigger: {
            trigger: '#contact-details',
            start: 'top 75%'
        },
        scaleY: 0,
        transformOrigin: 'top',
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Map container fade up
    gsap.from('#map-container', {
        scrollTrigger: {
            trigger: '#map-container',
            start: 'top 80%'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
    });
    
    // Map label scale in
    gsap.from('#map-label', {
        scrollTrigger: {
            trigger: '#map-container',
            start: 'top 80%'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        ease: 'power2.out'
    });
    
    
    // ═══════════════════════════════════════════════════════════════
    // 3. OPENING HOURS AUTO HIGHLIGHT
    // ═══════════════════════════════════════════════════════════════
    
    function highlightTodayHours() {
        const now = new Date();
        const currentDay = now.getDay(); // 0 = Sunday, 6 = Saturday
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentTime = currentHour * 60 + currentMinute; // Convert to minutes
        
        // Find today's row
        const todayRow = document.querySelector(`.hours-row[data-day="${currentDay}"]`);
        
        if (todayRow) {
            todayRow.classList.add('hours-row--today');
            
            // Check if restaurant is open today
            const hoursText = todayRow.querySelector('.hours-time').textContent;
            
            if (hoursText !== 'Closed') {
                // Parse opening and closing times
                // Format: "5:30 PM — 11:00 PM" or "6:00 PM — 11:30 PM"
                const timeMatch = hoursText.match(/(\d+):(\d+)\s*(AM|PM)\s*—\s*(\d+):(\d+)\s*(AM|PM)/);
                
                if (timeMatch) {
                    let openHour = parseInt(timeMatch[1]);
                    const openMinute = parseInt(timeMatch[2]);
                    const openPeriod = timeMatch[3];
                    let closeHour = parseInt(timeMatch[4]);
                    const closePeriod = timeMatch[6];
                    
                    // Convert to 24-hour format
                    if (openPeriod === 'PM' && openHour !== 12) openHour += 12;
                    if (openPeriod === 'AM' && openHour === 12) openHour = 0;
                    if (closePeriod === 'PM' && closeHour !== 12) closeHour += 12;
                    if (closePeriod === 'AM' && closeHour === 12) closeHour = 0;
                    
                    const openTime = openHour * 60 + openMinute;
                    const closeTime = closeHour * 60;
                    
                    // Determine status
                    if (currentTime >= openTime && currentTime < closeTime) {
                        todayRow.classList.add('hours-row--open-now');
                    } else if (currentTime < openTime) {
                        todayRow.classList.add('hours-row--opens-today');
                    } else {
                        todayRow.classList.add('hours-row--closed-now');
                    }
                }
            }
        }
    }
    
    highlightTodayHours();
    
    
    // ═══════════════════════════════════════════════════════════════
    // 4. MAP INTERACTION
    // ═══════════════════════════════════════════════════════════════
    
    // Prevent scroll hijacking on map
    const mapIframe = document.querySelector('.map-iframe');
    if (mapIframe) {
        mapIframe.addEventListener('mouseenter', () => {
            document.body.style.pointerEvents = 'none';
            mapIframe.style.pointerEvents = 'all';
        });
        
        mapIframe.addEventListener('mouseleave', () => {
            document.body.style.pointerEvents = 'all';
        });
    }
    
    
    // ═══════════════════════════════════════════════════════════════
    // 5. FORM HANDLER
    // ═══════════════════════════════════════════════════════════════
    
    const contactForm = document.getElementById('contact-form');
    const contactFormCard = document.getElementById('contact-form-card');
    const successMessageCard = document.getElementById('success-message-card');
    const sendAnotherBtn = document.getElementById('send-another-btn');
    const messageTextarea = document.getElementById('contact-message');
    const charCounter = document.getElementById('char-counter');
    
    // Character counter
    if (messageTextarea && charCounter) {
        messageTextarea.addEventListener('input', () => {
            const count = messageTextarea.value.length;
            charCounter.textContent = `${count} of 800`;
        });
    }
    
    // Form validation
    function validateContactForm() {
        let isValid = true;
        
        // Name validation
        const nameInput = document.getElementById('contact-name');
        const nameError = document.getElementById('name-error');
        if (nameInput.value.trim().length < 2) {
            nameError.textContent = 'Please enter your full name';
            nameError.classList.add('active');
            isValid = false;
        } else {
            nameError.classList.remove('active');
        }
        
        // Email validation
        const emailInput = document.getElementById('contact-email');
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.classList.add('active');
            isValid = false;
        } else {
            emailError.classList.remove('active');
        }
        
        // Subject validation
        const subjectSelect = document.getElementById('contact-subject');
        const subjectError = document.getElementById('subject-error');
        if (!subjectSelect.value) {
            subjectError.textContent = 'Please select a subject';
            subjectError.classList.add('active');
            isValid = false;
        } else {
            subjectError.classList.remove('active');
        }
        
        // Message validation
        const messageError = document.getElementById('message-error');
        if (messageTextarea.value.trim().length < 20) {
            messageError.textContent = 'Please enter your message (minimum 20 characters)';
            messageError.classList.add('active');
            isValid = false;
        } else {
            messageError.classList.remove('active');
        }
        
        return isValid;
    }
    
    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!validateContactForm()) {
                return;
            }
            
            // Get form data
            const formData = {
                name: document.getElementById('contact-name').value.trim(),
                email: document.getElementById('contact-email').value.trim(),
                subject: document.getElementById('contact-subject').value,
                message: messageTextarea.value.trim()
            };
            
            // Show success message
            showSuccessMessage(formData);
        });
    }
    
    
    // ═══════════════════════════════════════════════════════════════
    // 6. SUCCESS MESSAGE
    // ═══════════════════════════════════════════════════════════════
    
    function showSuccessMessage(formData) {
        // Update summary
        document.getElementById('summary-name').textContent = formData.name;
        
        // Get subject label
        const subjectSelect = document.getElementById('contact-subject');
        const subjectLabel = subjectSelect.options[subjectSelect.selectedIndex].text;
        document.getElementById('summary-subject').textContent = subjectLabel;
        
        // Fade out form card
        gsap.to(contactFormCard, {
            opacity: 0,
            duration: 0.4,
            ease: 'power2.out',
            onComplete: () => {
                // Fade in success card
                successMessageCard.classList.add('active');
                
                gsap.from(successMessageCard, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
                
                // Icon scale
                gsap.from('.success-icon', {
                    scale: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                    delay: 0.2
                });
                
                // Heading reveal
                gsap.from('.success-heading', {
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                    ease: 'power2.out',
                    delay: 0.3
                });
                
                // Text fade
                gsap.from('.success-text', {
                    opacity: 0,
                    y: 15,
                    duration: 0.6,
                    ease: 'power2.out',
                    delay: 0.4
                });
                
                // Summary rows stagger
                gsap.from('.summary-row', {
                    opacity: 0,
                    y: 15,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power2.out',
                    delay: 0.5
                });
                
                // Button fade
                gsap.from('#send-another-btn', {
                    opacity: 0,
                    y: 15,
                    duration: 0.5,
                    ease: 'power2.out',
                    delay: 0.7
                });
            }
        });
    }
    
    // Send another message button
    if (sendAnotherBtn) {
        sendAnotherBtn.addEventListener('click', () => {
            // Fade out success card
            gsap.to(successMessageCard, {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.out',
                onComplete: () => {
                    successMessageCard.classList.remove('active');
                    
                    // Reset form
                    contactForm.reset();
                    charCounter.textContent = '0 of 800';
                    
                    // Clear errors
                    document.querySelectorAll('.form-error').forEach(error => {
                        error.classList.remove('active');
                    });
                    
                    // Fade in form card
                    gsap.to(contactFormCard, {
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                }
            });
        });
    }
    
    
    // ═══════════════════════════════════════════════════════════════
    // 7. FAQ ACCORDION
    // ═══════════════════════════════════════════════════════════════
    
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const answerContent = item.querySelector('.faq-answer-content');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    
                    gsap.to(otherAnswer, {
                        height: 0,
                        duration: 0.35,
                        ease: 'power2.out'
                    });
                    
                    gsap.to(otherAnswer.querySelector('.faq-answer-content'), {
                        opacity: 0,
                        duration: 0.2,
                        ease: 'power2.out'
                    });
                    
                    otherItem.classList.remove('active');
                    otherQuestion.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle current item
            if (isActive) {
                // Close
                gsap.to(answer, {
                    height: 0,
                    duration: 0.35,
                    ease: 'power2.out'
                });
                
                gsap.to(answerContent, {
                    opacity: 0,
                    duration: 0.2,
                    ease: 'power2.out'
                });
                
                item.classList.remove('active');
                question.setAttribute('aria-expanded', 'false');
            } else {
                // Open
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
                
                // Get natural height
                answer.style.height = 'auto';
                const naturalHeight = answer.offsetHeight;
                answer.style.height = '0';
                
                gsap.to(answer, {
                    height: naturalHeight,
                    duration: 0.35,
                    ease: 'power2.out',
                    onComplete: () => {
                        answer.style.height = 'auto';
                    }
                });
                
                gsap.fromTo(answerContent, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 0.35,
                    delay: 0.1,
                    ease: 'power2.out'
                });
            }
        });
    });
    
    
    // ═══════════════════════════════════════════════════════════════
    // 8. SCROLL ANIMATIONS
    // ═══════════════════════════════════════════════════════════════
    
    // Ambient strip parallax (desktop only)
    if (window.innerWidth > 768) {
        gsap.to('.ambient-strip-bg', {
            scrollTrigger: {
                trigger: '.ambient-strip',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            y: '20%',
            ease: 'none'
        });
    }
    
    // Form card slide in from left
    gsap.from('#contact-form-card', {
        scrollTrigger: {
            trigger: '#contact-form-section',
            start: 'top 75%'
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Form card border fade
    gsap.from('#contact-form-card', {
        scrollTrigger: {
            trigger: '#contact-form-section',
            start: 'top 75%'
        },
        borderColor: 'rgba(198, 162, 91, 0)',
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Right column blocks stagger from right
    gsap.from('.info-block', {
        scrollTrigger: {
            trigger: '#info-column',
            start: 'top 75%'
        },
        x: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out'
    });
    
    // FAQ heading line reveal
    gsap.from('#faq-heading', {
        scrollTrigger: {
            trigger: '#faq-section',
            start: 'top 75%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // FAQ items stagger
    gsap.from('.faq-item', {
        scrollTrigger: {
            trigger: '#faq-list',
            start: 'top 80%'
        },
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
    });
    
    // Find us ornament line
    gsap.from('#find-us-ornament', {
        scrollTrigger: {
            trigger: '#find-us',
            start: 'top 75%'
        },
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Find us heading line reveal
    const findUsLines = document.querySelectorAll('.find-us-line');
    gsap.from(findUsLines[0], {
        scrollTrigger: {
            trigger: '#find-us',
            start: 'top 75%'
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out'
    });
    
    gsap.from(findUsLines[1], {
        scrollTrigger: {
            trigger: '#find-us',
            start: 'top 75%'
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        delay: 0.15,
        ease: 'power3.out'
    });
    
    // Find us subtext
    gsap.from('#find-us-subtext', {
        scrollTrigger: {
            trigger: '#find-us',
            start: 'top 75%'
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.3,
        ease: 'power2.out'
    });
    
    // Find us link
    gsap.from('#find-us-link', {
        scrollTrigger: {
            trigger: '#find-us',
            start: 'top 75%'
        },
        opacity: 0,
        y: 15,
        duration: 0.6,
        delay: 0.4,
        ease: 'power2.out'
    });
    
});
