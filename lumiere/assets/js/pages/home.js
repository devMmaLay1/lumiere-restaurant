/* ================================================
   LUMIÈRE — HOMEPAGE ANIMATIONS
   GSAP ScrollTrigger powered animations
   
   🔧 BUYER GUIDE:
   This file controls all animations on the homepage:
   - Hero parallax effects
   - Text reveals
   - Card entrance animations
   - Image parallax
   
   🔧 TO ADJUST ANIMATIONS:
   - Change duration values (in seconds)
   - Change stagger values (delay between items)
   - Change ease values (animation curve)
   
   🔧 TO DISABLE ANIMATIONS:
   Delete or comment out the specific init function call
   in initHomeAnimations() at the bottom of this file.
   
   You typically DON'T need to edit this unless you want
   to fine-tune animation timing and effects.
   ================================================ */


/**
 * Wait for everything to be ready, then fire animations
 */
function initHomeAnimations() {
    // Ensure GSAP and ScrollTrigger are loaded
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('⚠ GSAP or ScrollTrigger not loaded — skipping home animations');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Small delay to let images/components load
    // 🔧 EDIT: Change 300 to adjust delay before animations start (milliseconds)
    setTimeout(() => {
        initHeroAnimations();
        initBrandStatementAnimation();
        initSignaturesAnimation();
        initExperienceAnimation();
        initChefAnimation();
        initCtaBannerAnimation();
        initTestimonialsAnimation();
        initGalleryAnimation();
        initTestimonialsSwiper();

        console.log('✓ Home animations initialized');
    }, 300);
}


/* ==============================================
   SECTION 1 — HERO
   Parallax background + text group parallax
   Scroll indicator fade-out
   
   🔧 EDIT: Adjust parallax speed and entrance timing below
   ============================================== */

function initHeroAnimations() {
    const heroBg = document.querySelector('.hero-bg');
    const heroContent = document.querySelector('.hero-content');
    const scrollIndicator = document.getElementById('scroll-indicator');

    if (!heroBg) return;

    // 🔧 EDIT: Hero background parallax
    // yPercent: -15 means moves up 15% of its height
    // Change to -20 for more movement, -10 for less
    gsap.to(heroBg, {
        yPercent: -15,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1  // 🔧 EDIT: Lower = smoother (0.5), higher = snappier (2)
        }
    });

    // Hero content parallax — moves up at 20% scroll speed
    if (heroContent) {
        gsap.to(heroContent, {
            yPercent: -30,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: '80% top',
                scrub: 0.8
            }
        });
    }

    // Scroll indicator fade-out
    if (scrollIndicator) {
        gsap.to(scrollIndicator, {
            opacity: 0,
            y: -20,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.hero-section',
                start: '5% top',
                end: '15% top',
                scrub: 0.5
            }
        });
    }

    // Initial hero entrance
    // 🔧 EDIT: Change delay to adjust when hero content appears after page load
    const hTl = gsap.timeline({ delay: 1.6 });  // 1.6 seconds after page loads
    const heroLogo = document.getElementById('hero-logo');
    const heroTagline = document.getElementById('hero-tagline');
    const heroButtons = document.getElementById('hero-buttons');

    if (heroLogo) {
        // 🔧 EDIT: Logo entrance - change y value for more/less movement
        hTl.from(heroLogo, { y: 30, opacity: 0, duration: 1, ease: 'power3.out' });
    }
    if (heroTagline) {
        hTl.from(heroTagline, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');
    }
    if (heroButtons) {
        hTl.from(heroButtons, { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');
    }
}


/* ==============================================
   SECTION 2 — BRAND STATEMENT
   Gold ornament draw + line-by-line text reveal
   ============================================== */

function initBrandStatementAnimation() {
    const ornament = document.getElementById('brand-ornament');
    const quoteEl = document.getElementById('brand-quote');

    if (!quoteEl) return;

    // Split quote into lines by wrapping each sentence part
    const text = quoteEl.textContent.trim();
    quoteEl.innerHTML = '';

    // Split into phrases for line-by-line reveal
    const phrases = splitIntoLines(text);
    phrases.forEach(phrase => {
        const outerSpan = document.createElement('span');
        outerSpan.className = 'line-wrap';
        const innerSpan = document.createElement('span');
        innerSpan.className = 'line-inner';
        innerSpan.textContent = phrase;
        outerSpan.appendChild(innerSpan);
        quoteEl.appendChild(outerSpan);
    });

    const lineInners = quoteEl.querySelectorAll('.line-inner');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.brand-statement-section',
            start: 'top 75%',
            end: 'top 25%',
            toggleActions: 'play none none none'
        }
    });

    // Ornament draw-in from center
    if (ornament) {
        tl.to(ornament, {
            scaleX: 1,
            duration: 0.8,
            ease: 'power3.out'
        });
    }

    // Lines reveal upward
    tl.to(lineInners, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out'
    }, ornament ? '-=0.3' : 0);
}


/**
 * Split text into roughly equal line chunks
 */
function splitIntoLines(text) {
    const words = text.split(' ');
    const lines = [];
    const wordsPerLine = Math.ceil(words.length / 3);

    for (let i = 0; i < words.length; i += wordsPerLine) {
        lines.push(words.slice(i, i + wordsPerLine).join(' ') + ' ');
    }

    return lines;
}


/* ==============================================
   SECTION 3 — SIGNATURE DISHES
   Heading reveal + staggered card entrance
   + parallax on card images
   
   🔧 EDIT: Adjust card entrance timing below
   ============================================== */

function initSignaturesAnimation() {
    const heading = document.getElementById('signatures-heading');
    const cards = document.querySelectorAll('.signature-card');

    if (!cards.length) return;

    // Heading line reveal
    if (heading) {
        gsap.from(heading, {
            y: 40,
            opacity: 0,
            duration: 0.9,  // 🔧 EDIT: Animation duration in seconds
            ease: 'power3.out',
            scrollTrigger: {
                trigger: heading,
                start: 'top 80%',  // 🔧 EDIT: When animation starts (80% = when heading is 80% down viewport)
                toggleActions: 'play none none none'
            }
        });
    }

    // 🔧 EDIT: Cards stagger entrance
    gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,  // 🔧 EDIT: Delay between each card (seconds)
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#signatures-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    // Parallax inside each card's image (desktop only)
    if (window.innerWidth >= 1024) {
        cards.forEach(card => {
            const img = card.querySelector('.sig-img');
            if (img) {
                gsap.to(img, {
                    yPercent: -8,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1
                    }
                });
            }
        });
    }
}


/* ==============================================
   SECTION 4 — THE EXPERIENCE
   Heading reveal + staggered columns
   + icon scale micro-animation
   ============================================== */

function initExperienceAnimation() {
    const heading = document.getElementById('experience-heading');
    const pillars = document.querySelectorAll('.experience-pillar');

    if (!pillars.length) return;

    // Heading
    if (heading) {
        gsap.from(heading, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: heading,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Pillars stagger — slightly slower than dish cards
    pillars.forEach((pillar, i) => {
        const icon = pillar.querySelector('.pillar-icon');
        const title = pillar.querySelector('.pillar-title');
        const text = pillar.querySelector('.pillar-text');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pillar,
                start: 'top 82%',
                toggleActions: 'play none none none'
            },
            delay: i * 0.2
        });

        if (icon) {
            tl.from(icon, { scale: 0.8, opacity: 0, duration: 0.5, ease: 'power3.out' });
        }
        if (title) {
            tl.from(title, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2');
        }
        if (text) {
            tl.from(text, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
        }
    });
}


/* ==============================================
   SECTION 5 — CHEF FEATURE
   Portrait parallax + sequential text reveal
   ============================================== */

function initChefAnimation() {
    const portrait = document.getElementById('chef-portrait');
    const label = document.getElementById('chef-label');
    const name = document.getElementById('chef-name');
    const quote = document.getElementById('chef-quote');
    const bioTexts = document.querySelectorAll('.chef-bio-text');
    const credentials = document.getElementById('chef-credentials');

    // Portrait parallax (moves up at 30% scroll speed)
    if (portrait && window.innerWidth >= 768) {
        gsap.to(portrait, {
            yPercent: -10,
            ease: 'none',
            scrollTrigger: {
                trigger: '.chef-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    }

    // Right side sequential reveal
    const bioTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.chef-bio',
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    });

    if (label) bioTl.from(label, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' });
    if (name) bioTl.from(name, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3');
    if (quote) bioTl.from(quote, { y: 25, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');

    bioTexts.forEach(p => {
        bioTl.from(p, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
    });

    if (credentials) {
        bioTl.from(credentials, { x: -30, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2');
    }
}


/* ==============================================
   SECTION 6 — RESERVATION CTA BANNER
   Background parallax + heading reveal + button scale
   ============================================== */

function initCtaBannerAnimation() {
    const bg = document.querySelector('.cta-banner-bg');
    const heading = document.getElementById('cta-heading');
    const text = document.querySelector('.cta-banner-text');
    const btn = document.getElementById('cta-btn');

    // Background parallax at 35% scroll speed
    if (bg) {
        gsap.to(bg, {
            yPercent: -12,
            ease: 'none',
            scrollTrigger: {
                trigger: '.cta-banner-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    }

    // Content reveal
    const ctaTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.cta-banner-content',
            start: 'top 78%',
            toggleActions: 'play none none none'
        }
    });

    if (heading) ctaTl.from(heading, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out' });
    if (text) ctaTl.from(text, { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4');
    if (btn) ctaTl.from(btn, { scale: 0.95, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
}


/* ==============================================
   SECTION 7 — TESTIMONIALS
   Heading reveal + Swiper init
   ============================================== */

function initTestimonialsAnimation() {
    const heading = document.getElementById('testimonials-heading');
    const slider = document.getElementById('testimonials-slider');

    if (heading) {
        gsap.from(heading, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: heading,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }

    if (slider) {
        gsap.from(slider, {
            x: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: slider,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }
}


function initTestimonialsSwiper() {
    if (typeof Swiper === 'undefined') {
        console.warn('⚠ Swiper not loaded');
        return;
    }

    // 🔧 EDIT: Testimonial slider configuration
    new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 6000,  // 🔧 EDIT: Time between slides (milliseconds)
            disableOnInteraction: false
        },
        pagination: {
            el: '.testimonials-pagination',
            clickable: true
        },
        navigation: {
            prevEl: '.testimonials-prev',
            nextEl: '.testimonials-next'
        }
    });

    console.log('✓ Testimonials Swiper initialized');
}


/* ==============================================
   SECTION 8 — GALLERY PREVIEW
   Heading reveal + staggered grid entrance
   + image parallax
   ============================================== */

function initGalleryAnimation() {
    const heading = document.getElementById('gallery-heading');
    const cells = document.querySelectorAll('.gallery-cell');

    if (heading) {
        gsap.from(heading, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: heading,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Gallery grid stagger using batch for reliability
    if (cells.length) {
        // Set initial hidden state via GSAP set (not from)
        gsap.set(cells, { y: 40, opacity: 0 });

        // Use batch so each cell animates when IT enters the viewport
        ScrollTrigger.batch(cells, {
            start: 'top 92%',
            onEnter: (batch) => {
                gsap.to(batch, {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.08,
                    ease: 'power3.out',
                    overwrite: true
                });
            }
        });

        // Safety fallback — ensure gallery is visible after 8s no matter what
        setTimeout(() => {
            cells.forEach(cell => {
                if (parseFloat(getComputedStyle(cell).opacity) < 0.5) {
                    gsap.to(cell, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
                }
            });
        }, 8000);

        // Subtle parallax on each image (desktop only)
        if (window.innerWidth >= 1024) {
            cells.forEach(cell => {
                const img = cell.querySelector('img');
                if (img) {
                    gsap.to(img, {
                        yPercent: -6,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: cell,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 1
                        }
                    });
                }
            });
        }
    }
}


/* ==============================================
   INITIALIZATION
   Called after component loader finishes
   ============================================== */

// Auto-init when DOM + components are ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initHomeAnimations, 500);
    });
} else {
    setTimeout(initHomeAnimations, 500);
}