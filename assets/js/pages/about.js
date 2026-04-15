/* ================================================
   LUMIÈRE — ABOUT PAGE JAVASCRIPT
   Handles hero animations, scroll-triggered section
   reveals, counter animations, parallax effects,
   and team card interactions.

   Dependencies: GSAP 3.12+, ScrollTrigger, CountUp.js v2
   🔧 EDIT: Search for 🔧 to find customisable values.
   ================================================ */


/* ------------------------------------------
   INITIALISATION
   Called when the DOM is fully loaded.
   Waits 300ms for components to render first.
   ------------------------------------------ */

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initAboutHero();
        initOriginAnimations();
        initStatsAnimations();
        initChefAnimations();
        initPhilosophyAnimations();
        initProvenanceAnimations();
        initKitchenAnimations();
        initTeamAnimations();
        initAccoladeAnimations();
        initDiningAnimations();
        initCounters();
        console.log('✓ About page initialized');
    }, 300);
});


/* ==============================================
   SECTION 1 — HERO ENTRANCE ANIMATION
   Breadcrumb → Label → Heading → Sub → Gold line
   ============================================== */

function initAboutHero() {
    if (typeof gsap === 'undefined') {
        showAboutHeroFallback();
        return;
    }

    const tl = gsap.timeline({ delay: 0.3 });

    /* 🔧 EDIT: Animation timing for hero elements */

    // Breadcrumb fades in
    tl.to('.about-breadcrumb', {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
    });

    // Gold label fades up
    tl.to('.about-hero-label', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
    }, '-=0.2');

    // Heading fades up
    tl.to('.about-hero-heading', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out'
    }, '-=0.2');

    // Subheading fades up
    tl.to('.about-hero-sub', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
    }, '-=0.2');

    // Gold line draws from center
    tl.to('.about-hero-line', {
        scaleX: 1,
        duration: 0.8,
        ease: 'power2.inOut'
    }, '-=0.3');

    // Set initial states
    gsap.set(['.about-hero-label', '.about-hero-heading', '.about-hero-sub'], {
        y: 20
    });

    console.log('✓ About hero animations initialized');
}

/**
 * Fallback: show hero without animations when GSAP unavailable
 */
function showAboutHeroFallback() {
    const elements = document.querySelectorAll(
        '.about-breadcrumb, .about-hero-label, .about-hero-heading, .about-hero-sub'
    );
    elements.forEach(el => el.style.opacity = '1');

    const line = document.querySelector('.about-hero-line');
    if (line) line.style.transform = 'scaleX(1)';
}


/* ==============================================
   SECTION 2 — ORIGIN STORY ANIMATIONS
   Image slides from left, text staggers from right,
   gold divider draws downward, quote settles.
   ============================================== */

function initOriginAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const section = document.getElementById('about-origin');
    if (!section) return;

    const image      = section.querySelector('.about-split-image');
    const divider    = section.querySelector('.about-split-divider');
    const textItems  = section.querySelectorAll('.about-split-text > *');
    const quote      = section.querySelector('.about-quote');

    const isMobile = window.innerWidth < 768;

    // Image slides from left
    if (image) {
        gsap.from(image, {
            x: isMobile ? -30 : -60,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Gold divider draws downward
    if (divider) {
        gsap.from(divider, {
            scaleY: 0,
            transformOrigin: 'top',
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Text content staggers in from right
    if (textItems.length) {
        gsap.from(textItems, {
            x: isMobile ? 15 : 30,
            opacity: 0,
            duration: 0.5,
            stagger: isMobile ? 0.08 : 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Pull quote settles with scale
    if (quote) {
        gsap.from(quote, {
            scale: 1.02,
            opacity: 0,
            duration: 0.6,
            delay: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: quote,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    }

    console.log('✓ Origin animations initialized');
}


/* ==============================================
   SECTION 3 — STATISTICS ANIMATIONS
   Stats stagger from below, counters count up.
   ============================================== */

function initStatsAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const section = document.getElementById('about-stats');
    if (!section) return;

    const stats = section.querySelectorAll('.about-stat');
    const isMobile = window.innerWidth < 768;

    gsap.from(stats, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: isMobile ? 0.08 : 0.15,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    console.log('✓ Stats animations initialized');
}


/* ==============================================
   SECTION 4 — CHEF PROFILE ANIMATIONS
   Text staggers from left, portrait slides from right,
   accolade badges scale in.
   ============================================== */

function initChefAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const section = document.getElementById('about-chef');
    if (!section) return;

    const textItems  = section.querySelectorAll('.about-split-text > *:not(.about-accolades)');
    const portrait   = section.querySelector('.about-chef-portrait');
    const badges     = section.querySelectorAll('.about-accolade');
    const isMobile   = window.innerWidth < 768;

    // Text content staggers from left
    if (textItems.length) {
        gsap.from(textItems, {
            x: isMobile ? -15 : -30,
            opacity: 0,
            duration: 0.5,
            stagger: isMobile ? 0.08 : 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Chef portrait slides from right
    if (portrait) {
        gsap.from(portrait, {
            x: isMobile ? 30 : 60,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Accolade badges scale in staggered
    if (badges.length) {
        gsap.from(badges, {
            scale: 0.85,
            opacity: 0,
            duration: 0.4,
            stagger: 0.15,
            ease: 'back.out(1.4)',
            scrollTrigger: {
                trigger: badges[0],
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    }

    console.log('✓ Chef animations initialized');
}


/* ==============================================
   SECTION 5 — PHILOSOPHY ANIMATIONS
   Heading staggers, pillars left-to-right,
   icons scale, pull quote fades up last.
   ============================================== */

function initPhilosophyAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const section = document.getElementById('about-philosophy');
    if (!section) return;

    const heading  = section.querySelector('.about-center-heading');
    const pillars  = section.querySelectorAll('.about-pillar');
    const icons    = section.querySelectorAll('.about-pillar-icon');
    const quote    = section.querySelector('.about-quote-full');
    const isMobile = window.innerWidth < 768;

    // Heading block staggers in
    if (heading) {
        gsap.from(heading.children, {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: heading,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Pillar icons scale in
    if (icons.length) {
        gsap.from(icons, {
            scale: 0.8,
            opacity: 0,
            duration: 0.4,
            stagger: 0.2,
            ease: 'back.out(1.4)',
            scrollTrigger: {
                trigger: pillars[0],
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Pillars stagger left to right
    if (pillars.length) {
        gsap.from(pillars, {
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: isMobile ? 0.1 : 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: pillars[0],
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Pull quote fades up last
    if (quote) {
        gsap.from(quote, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: quote,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    }

    console.log('✓ Philosophy animations initialized');
}


/* ==============================================
   SECTION 6 — PROVENANCE & SUPPLIERS ANIMATIONS
   Image from left, text from right,
   supplier rows stagger top-to-bottom.
   ============================================== */

function initProvenanceAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const section = document.getElementById('about-provenance');
    if (!section) return;

    const image   = section.querySelector('.about-split-image');
    const divider = section.querySelector('.about-split-divider');
    const text    = section.querySelectorAll('.about-split-text > *:not(.about-suppliers)');
    const rows    = section.querySelectorAll('.about-supplier-row');
    const isMobile = window.innerWidth < 768;

    // Image slides from left
    if (image) {
        gsap.from(image, {
            x: isMobile ? -30 : -60,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Gold divider draws
    if (divider) {
        gsap.from(divider, {
            scaleY: 0,
            transformOrigin: 'top',
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Text from right
    if (text.length) {
        gsap.from(text, {
            x: isMobile ? 15 : 30,
            opacity: 0,
            duration: 0.5,
            stagger: isMobile ? 0.08 : 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Supplier rows stagger in
    if (rows.length) {
        gsap.from(rows, {
            y: 15,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: rows[0],
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    }

    console.log('✓ Provenance animations initialized');
}


/* ==============================================
   SECTION 7 — KITCHEN ANIMATIONS
   Parallax background (desktop only),
   content staggers from below.
   ============================================== */

function initKitchenAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const section = document.getElementById('about-kitchen');
    if (!section) return;

    const bg       = section.querySelector('.about-kitchen-bg');
    const content  = section.querySelector('.about-kitchen-content');
    const isMobile = window.innerWidth < 768;

    // Parallax on desktop only
    if (bg && !isMobile) {
        gsap.to(bg, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    // Content staggers from below
    if (content) {
        gsap.from(content.children, {
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Gold line draws
    const goldLine = section.querySelector('.about-hero-line');
    if (goldLine) {
        gsap.to(goldLine, {
            scaleX: 1,
            duration: 0.8,
            delay: 0.5,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: section,
                start: 'top 60%',
                toggleActions: 'play none none none'
            }
        });
    }

    console.log('✓ Kitchen animations initialized');
}


/* ==============================================
   SECTION 8 — TEAM CARD ANIMATIONS
   Heading staggers, cards stagger from below,
   portraits scale in with cards.
   ============================================== */

function initTeamAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const section = document.getElementById('about-team');
    if (!section) return;

    const heading   = section.querySelector('.about-center-heading');
    const cards     = section.querySelectorAll('.about-team-card');
    const portraits = section.querySelectorAll('.about-team-portrait');
    const isMobile  = window.innerWidth < 768;

    // Heading staggers in
    if (heading) {
        gsap.from(heading.children, {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: heading,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Cards stagger from below
    if (cards.length) {
        gsap.from(cards, {
            y: 40,
            opacity: 0,
            duration: 0.5,
            stagger: isMobile ? 0.08 : 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: cards[0],
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Portraits scale in
    if (portraits.length) {
        gsap.from(portraits, {
            scale: 0.9,
            opacity: 0,
            duration: 0.5,
            stagger: isMobile ? 0.08 : 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: cards[0],
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    }

    console.log('✓ Team animations initialized');
}


/* ==============================================
   SECTION 9 — ACCOLADES & PRESS ANIMATIONS
   Award badges scale in, press cards stagger,
   quote marks fade before text.
   ============================================== */

function initAccoladeAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const section = document.getElementById('about-accolades');
    if (!section) return;

    const heading = section.querySelector('.about-center-heading');
    const badges  = section.querySelectorAll('.about-award-badge');
    const cards   = section.querySelectorAll('.about-press-card');
    const marks   = section.querySelectorAll('.about-press-mark');

    // Heading
    if (heading) {
        gsap.from(heading.children, {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: heading,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Award badges scale in staggered
    if (badges.length) {
        gsap.from(badges, {
            scale: 0.85,
            opacity: 0,
            duration: 0.4,
            stagger: 0.12,
            ease: 'back.out(1.4)',
            scrollTrigger: {
                trigger: badges[0],
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Quote marks fade in first
    if (marks.length) {
        gsap.from(marks, {
            opacity: 0,
            duration: 0.3,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: cards[0],
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Press cards stagger from below
    if (cards.length) {
        gsap.from(cards, {
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: cards[0],
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    }

    console.log('✓ Accolades animations initialized');
}


/* ==============================================
   SECTION 10 — DINING ROOM ANIMATIONS
   Parallax background (desktop), content staggers.
   ============================================== */

function initDiningAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const section = document.getElementById('about-dining');
    if (!section) return;

    const bg       = section.querySelector('.about-dining-bg');
    const content  = section.querySelector('.about-dining-content');
    const isMobile = window.innerWidth < 768;

    // Parallax on desktop only
    if (bg && !isMobile) {
        gsap.to(bg, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    // Content staggers from below
    if (content) {
        gsap.from(content.children, {
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    }

    console.log('✓ Dining animations initialized');
}


/* ==============================================
   COUNTER ANIMATION (About-page specific)
   Counts from 0 to data-count value when
   the stats section enters the viewport.
   Uses CountUp v2 or custom fallback.
   ============================================== */

function initCounters() {
    const counters = document.querySelectorAll('.about-stat-number[data-count]');
    if (!counters.length) return;

    // Resolve CountUp constructor (v2 UMD exports as countUp.CountUp)
    const CountUpConstructor = (typeof CountUp !== 'undefined')
        ? CountUp
        : (typeof countUp !== 'undefined' && countUp.CountUp)
            ? countUp.CountUp
            : undefined;

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');

                const el       = entry.target;
                const endValue = parseFloat(el.getAttribute('data-count'));
                const suffix   = el.getAttribute('data-suffix') || '';
                const duration = 2;

                if (CountUpConstructor) {
                    // Use CountUp v2
                    const instance = new CountUpConstructor(el, endValue, {
                        startVal: 0,
                        duration: duration,
                        suffix: suffix,
                        useEasing: true,
                        useGrouping: true
                    });

                    if (!instance.error) {
                        instance.start();
                    } else {
                        el.textContent = endValue + suffix;
                    }
                } else {
                    // Custom fallback counter
                    animateCounterFallback(el, endValue, suffix, duration);
                }
            }
        });
    }, observerOptions);

    counters.forEach(c => observer.observe(c));
    console.log(`✓ ${counters.length} about-page counters initialized`);
}

/**
 * Simple counter fallback when CountUp is not available
 */
function animateCounterFallback(el, end, suffix, duration) {
    const start = 0;
    const range = end - start;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + range * eased);
        el.textContent = current + suffix;

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}



/* ==============================================
   SECTION 10 — FAQ ACCORDION FUNCTIONALITY
   Handles expanding/collapsing FAQ items
   ============================================== */

function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.about-faq-item');
    
    if (!faqItems.length) return;

    faqItems.forEach(item => {
        const question = item.querySelector('.about-faq-question');
        const answer = item.querySelector('.about-faq-answer');

        if (!question || !answer) return;

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherQuestion = otherItem.querySelector('.about-faq-question');
                    if (otherQuestion) {
                        otherQuestion.setAttribute('aria-expanded', 'false');
                    }
                }
            });

            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                question.setAttribute('aria-expanded', 'false');
            } else {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    console.log(`✓ ${faqItems.length} FAQ items initialized`);
}

// Add FAQ initialization to the main init sequence
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initFAQAccordion();
    }, 300);
});


/* ==============================================
   FAQ ANIMATIONS (Optional GSAP enhancement)
   Animates FAQ section when scrolled into view
   ============================================== */

function initFAQAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const section = document.getElementById('about-faq');
    if (!section) return;

    const heading = section.querySelector('.about-center-heading');
    const faqItems = section.querySelectorAll('.about-faq-item');
    const isMobile = window.innerWidth < 768;

    // Heading staggers in
    if (heading) {
        gsap.from(heading.children, {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: heading,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }

    // FAQ items stagger from below
    if (faqItems.length) {
        gsap.from(faqItems, {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: isMobile ? 0.08 : 0.12,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: faqItems[0],
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    }

    console.log('✓ FAQ animations initialized');
}

// Add FAQ animations to the main init sequence
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initFAQAnimations();
    }, 300);
});
