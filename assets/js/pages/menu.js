/* ================================================
   LUMIÈRE — MENU PAGE JAVASCRIPT
   Unified filter + pagination system
   
   🔧 BUYER GUIDE:
   This file controls the menu page functionality:
   - Category filtering (Starters, Mains, Desserts, etc.)
   - Pagination (showing X items per page)
   - Sticky filter bar (sticks to top when scrolling)
   - Animations (hero, intro, filter transitions)
   
   🔧 COMMON CUSTOMIZATIONS:
   - Items per page: Edit ITEMS_PER_PAGE values below
   - Category names: Edit CATEGORY_LABELS below
   - Animation speed: Edit FILTER_SPEED below
   - Sticky bar behavior: Edit initStickyFilterBar()
   
   You typically DON'T need to edit this unless you want to
   change how filtering and pagination work.
   ================================================ */


/* ==============================================
   CONFIGURATION
   🔧 EDIT these values to change behaviour
   ============================================== */

// 🔧 EDIT: Items shown per page on each screen size
const ITEMS_PER_PAGE_MOBILE  = 4;  // Phones (below 768px)
const ITEMS_PER_PAGE_TABLET  = 6;  // Tablets (768px - 1023px)
const ITEMS_PER_PAGE_DESKTOP = 6;  // Desktop (1024px and above)

// 🔧 EDIT: Transition speed for filter animation in seconds
const FILTER_SPEED = 0.25;  // Lower = faster, higher = slower

// 🔧 EDIT: Category display names
// Keys must match data-filter values on filter tabs in menu.html
const CATEGORY_LABELS = {
    all:      'All Dishes',
    starters: 'Starters',
    mains:    'Mains',
    seafood:  'Seafood Specials',
    cheese:   'Cheese Course',
    desserts: 'Desserts',
    drinks:   'Drinks',
    tasting:  'Tasting Menus'
};


/* ==============================================
   STATE
   Single source of truth for the whole system
   ============================================== */

let state = {
    activeCategory: 'all',
    currentPage:    1,
    allCards:       []   // populated on init — array of { el, category }
};


/* ==============================================
   INITIALISE
   Entry point — called after DOM is ready
   
   🔧 WHAT THIS DOES:
   1. Builds index of all menu cards
   2. Initializes hero animations
   3. Sets up filter bar (sticky behavior)
   4. Connects filter tabs to filtering logic
   5. Shows first page of items
   ============================================== */

function initMenuPage() {
    console.log('🍽 Menu page — initialising');

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('⚠ GSAP or ScrollTrigger not loaded');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // 🔧 EDIT: Change 300 to adjust initialization delay (milliseconds)
    setTimeout(() => {
        buildCardIndex();
        initMenuHeroAnimations();
        initMenuIntroAnimations();
        initMenuIntroCounters();
        initStickyFilterBar();
        initFilterBarAnimations();
        initFilterTabs();
        renderDisplay();   // show first page on load
        console.log('✓ Menu page ready');
    }, 300);
}


/* ==============================================
   STEP 1 — BUILD CARD INDEX
   Read all cards from the DOM once and store them
   ============================================== */

function buildCardIndex() {
    const grid = document.getElementById('menu-items-grid');
    if (!grid) {
        console.warn('⚠ menu-items-grid not found');
        return;
    }

    // Collect every card and its category
    const cards = Array.from(grid.querySelectorAll('.menu-item-card'));
    state.allCards = cards.map(el => ({
        el,
        category: el.getAttribute('data-category') || 'all'
    }));

    // Hide all cards initially — renderDisplay will show the right ones
    state.allCards.forEach(card => {
        card.el.style.display = 'none';
    });

    console.log(`✓ Card index built — ${state.allCards.length} cards found`);
}


/* ==============================================
   STEP 2 — GET ITEMS PER PAGE
   Reads current screen width and returns correct value
   ============================================== */

function getItemsPerPage() {
    const w = window.innerWidth;
    if (w >= 1024) return ITEMS_PER_PAGE_DESKTOP;
    if (w >= 768)  return ITEMS_PER_PAGE_TABLET;
    return ITEMS_PER_PAGE_MOBILE;
}


/* ==============================================
   STEP 3 — RENDER DISPLAY
   Core function — runs every time category or page changes.
   1. Filter cards by active category
   2. Slice for current page
   3. Show/hide cards
   4. Update heading label
   5. Rebuild pagination
   ============================================== */

function renderDisplay() {
    const { activeCategory, currentPage, allCards } = state;
    const itemsPerPage = getItemsPerPage();

    // 1. Filter cards
    const filtered = activeCategory === 'all'
        ? allCards
        : allCards.filter(c => c.category === activeCategory);

    const totalItems = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

    // Guard: if currentPage is out of range, clamp it
    if (state.currentPage > totalPages) {
        state.currentPage = totalPages;
    }

    const startIndex = (state.currentPage - 1) * itemsPerPage;
    const endIndex   = startIndex + itemsPerPage;

    // 2. Hide every card first
    allCards.forEach(card => {
        card.el.style.display = 'none';
        card.el.style.opacity = '0';
    });

    // 3. Show only the cards for this page
    const pageCards = filtered.slice(startIndex, endIndex);
    pageCards.forEach(card => {
        card.el.style.display = 'grid';
    });

    // 4. Animate the visible cards in with GSAP stagger
    if (pageCards.length > 0) {
        gsap.fromTo(
            pageCards.map(c => c.el),
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.06,
                ease: 'power2.out',
                onComplete: () => {
                    // Refresh Lenis smooth scroll after content changes
                    if (window.lenis) {
                        window.lenis.resize();
                    }
                    // Refresh ScrollTrigger after content changes
                    if (typeof ScrollTrigger !== 'undefined') {
                        ScrollTrigger.refresh();
                    }
                }
            }
        );
    } else {
        // If no cards, still refresh scroll
        if (window.lenis) {
            window.lenis.resize();
        }
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    }

    // 5. Update category heading label
    updateCategoryLabel(activeCategory, totalItems);

    // 6. Rebuild pagination controls
    renderPagination(state.currentPage, totalPages);
}


/* ==============================================
   STEP 4 — UPDATE CATEGORY LABEL
   Updates the heading above the grid
   ============================================== */

function updateCategoryLabel(category, totalItems) {
    const heading = document.getElementById('menu-active-heading');
    if (!heading) return;

    const label = CATEGORY_LABELS[category] || category;
    heading.textContent = label;
}


/* ==============================================
   STEP 5 — RENDER PAGINATION
   Builds pagination HTML fresh every time
   ============================================== */

function renderPagination(currentPage, totalPages) {
    const wrapper = document.getElementById('menu-pagination-wrapper');
    if (!wrapper) return;

    // Always clear first
    wrapper.innerHTML = '';

    // No pagination needed if only one page
    if (totalPages <= 1) return;

    const container = document.createElement('div');
    container.className = 'menu-pagination';

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn pagination-prev';
    prevBtn.disabled  = currentPage === 1;
    prevBtn.setAttribute('aria-label', 'Previous page');
    prevBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`;
    prevBtn.addEventListener('click', () => changePage(currentPage - 1));
    container.appendChild(prevBtn);

    // Page numbers
    const numbersContainer = document.createElement('div');
    numbersContainer.className = 'pagination-numbers';

    // How many page buttons to show — fewer on mobile
    const maxVisible = window.innerWidth < 768 ? 3 : 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage   = Math.min(totalPages, startPage + maxVisible - 1);

    // Adjust start if we're near the end
    if (endPage - startPage < maxVisible - 1) {
        startPage = Math.max(1, endPage - maxVisible + 1);
    }

    // First page + ellipsis
    if (startPage > 1) {
        numbersContainer.appendChild(createPageButton(1, currentPage));
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '…';
            numbersContainer.appendChild(ellipsis);
        }
    }

    // Visible page range
    for (let i = startPage; i <= endPage; i++) {
        numbersContainer.appendChild(createPageButton(i, currentPage));
    }

    // Ellipsis + last page
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '…';
            numbersContainer.appendChild(ellipsis);
        }
        numbersContainer.appendChild(createPageButton(totalPages, currentPage));
    }

    container.appendChild(numbersContainer);

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn pagination-next';
    nextBtn.disabled  = currentPage === totalPages;
    nextBtn.setAttribute('aria-label', 'Next page');
    nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`;
    nextBtn.addEventListener('click', () => changePage(currentPage + 1));
    container.appendChild(nextBtn);

    wrapper.appendChild(container);
}


/* ==============================================
   HELPER — CREATE PAGE NUMBER BUTTON
   ============================================== */

function createPageButton(pageNum, currentPage) {
    const btn = document.createElement('button');
    btn.className = 'pagination-number' + (pageNum === currentPage ? ' active' : '');
    btn.textContent = pageNum;
    btn.setAttribute('aria-label', `Page ${pageNum}`);
    if (pageNum === currentPage) {
        btn.setAttribute('aria-current', 'page');
    }
    btn.addEventListener('click', () => changePage(pageNum));
    return btn;
}


/* ==============================================
   CHANGE PAGE
   Updates state and re-renders, then scrolls user
   back to top of the content area
   ============================================== */

function changePage(page) {
    state.currentPage = page;
    renderDisplay();
    scrollToContentTop();
}


/* ==============================================
   SCROLL TO CONTENT TOP
   Scrolls to the top of the menu grid area,
   accounting for sticky navbar + filter bar height
   ============================================== */

function scrollToContentTop() {
    const contentArea = document.getElementById('menu-content-area');
    if (!contentArea) return;

    // Get heights of sticky elements
    const navbar    = document.querySelector('.navbar');
    const filterBar = document.getElementById('menu-filter-bar');
    const navH      = navbar    ? navbar.offsetHeight    : 72;
    const filterH   = filterBar ? filterBar.offsetHeight : 60;
    const offset    = navH + filterH + 24; // 24px breathing room

    const targetY = contentArea.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
        top:      Math.max(0, targetY),
        behavior: 'smooth'
    });
}


/* ==============================================
   FILTER TAB CLICK HANDLERS
   ============================================== */

function initFilterTabs() {
    const tabs = document.querySelectorAll('.menu-filter-tab');
    if (tabs.length === 0) {
        console.warn('⚠ Filter tabs not found');
        return;
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filterValue = tab.getAttribute('data-filter');

            // Update active tab UI immediately for instant feedback
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update state — always reset to page 1 on category change
            state.activeCategory = filterValue;
            state.currentPage    = 1;

            // Re-render
            renderDisplay();
            
            // Scroll back to menu content area so user can see filtered results
            scrollToContentTop();
        });
    });

    console.log(`✓ ${tabs.length} filter tabs initialised`);
}


/* ==============================================
   STICKY FILTER BAR
   Uses scroll listener + IntersectionObserver
   to add/remove sticky class with style changes
   ============================================== */

function initStickyFilterBar() {
    const filterBar   = document.getElementById('menu-filter-bar');
    const spacer      = document.getElementById('menu-filter-spacer');

    if (!filterBar) {
        console.warn('⚠ Filter bar not found');
        return;
    }

    const navbar      = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 72;

    let originalOffsetTop  = 0;
    let filterBarHeight    = 0;
    let isSticky           = false;

    function measure() {
        // Temporarily remove sticky to get true position
        filterBar.classList.remove('sticky');
        if (spacer) spacer.style.height = '0px';

        originalOffsetTop = filterBar.offsetTop;
        filterBarHeight   = filterBar.offsetHeight;
    }

    // Measure after a short delay to let components render
    setTimeout(measure, 200);

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const shouldStick = scrollTop >= originalOffsetTop - navbarHeight;

        if (shouldStick && !isSticky) {
            isSticky = true;
            filterBar.classList.add('sticky');
            // Add spacer so content below doesn't jump
            if (spacer) spacer.style.height = filterBarHeight + 'px';
        } else if (!shouldStick && isSticky) {
            isSticky = false;
            filterBar.classList.remove('sticky');
            if (spacer) spacer.style.height = '0px';
        }
    }

    // Throttled scroll listener
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Re-measure on resize
    window.addEventListener('resize', () => {
        setTimeout(measure, 150);
    });

    // Re-render on resize in case items-per-page changes breakpoint
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            renderDisplay();
        }, 300);
    });

    console.log('✓ Sticky filter bar initialised');
}


/* ==============================================
   FILTER BAR FADE-IN ANIMATION
   ============================================== */

function initFilterBarAnimations() {
    const filterBar = document.getElementById('menu-filter-bar');
    if (!filterBar) return;

    gsap.from(filterBar, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: filterBar,
            start: 'top 90%',
            toggleActions: 'play none none none'
        }
    });
}


/* ==============================================
   HERO ANIMATIONS
   Timeline: Breadcrumb → Label → Heading → Subheading → Gold line
   ============================================== */

function initMenuHeroAnimations() {
    const breadcrumb  = document.getElementById('menu-breadcrumb');
    const label       = document.getElementById('menu-hero-label');
    const heading     = document.getElementById('menu-hero-heading');
    const subheading  = document.getElementById('menu-hero-subheading');
    const separator   = document.getElementById('menu-hero-separator');

    if (!heading) return;

    // 🔧 EDIT: Change delay — 1.6s accounts for page loader
    const tl = gsap.timeline({ delay: 1.6 });

    if (breadcrumb) tl.to(breadcrumb, { opacity: 1, duration: 0.6, ease: 'power2.out' });
    if (label)      tl.to(label,      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3');
    if (heading)    tl.to(heading,    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.4');
    if (subheading) tl.to(subheading, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5');
    if (separator)  tl.to(separator,  { scaleX: 1,  duration: 0.8, ease: 'power2.inOut' },     '-=0.4');

    console.log('✓ Hero animations initialised');
}


/* ==============================================
   MENU INTRO ANIMATIONS
   Divider draw + paragraph reveal + stats stagger
   ============================================== */

function initMenuIntroAnimations() {
    const divider   = document.getElementById('menu-intro-divider');
    const paragraph = document.getElementById('menu-intro-paragraph');
    const stats     = document.querySelectorAll('.menu-stat');

    if (!paragraph) return;

    if (divider) {
        gsap.to(divider, {
            scaleY: 1,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '.menu-intro-section',
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    gsap.from(paragraph, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: paragraph,
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    if (stats.length > 0) {
        gsap.from(stats, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.menu-intro-stats',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }

    console.log('✓ Intro animations initialised');
}


/* ==============================================
   MENU INTRO COUNTERS
   CountUp.js triggered by IntersectionObserver
   ============================================== */

function initMenuIntroCounters() {
    const CountUpConstructor =
        (typeof CountUp !== 'undefined') ? CountUp
        : (typeof countUp !== 'undefined' && countUp.CountUp) ? countUp.CountUp
        : undefined;

    if (!CountUpConstructor) {
        console.warn('⚠ CountUp.js not loaded');
        return;
    }

    const statNumbers = document.querySelectorAll('.menu-stat-number[data-count]');
    if (statNumbers.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const el       = entry.target;
                const endValue = parseFloat(el.getAttribute('data-count'));
                const instance = new CountUpConstructor(el, endValue, {
                    startVal:      0,
                    duration:      2.5,
                    decimalPlaces: 0,
                    useEasing:     true,
                    useGrouping:   false
                });
                if (!instance.error) {
                    instance.start();
                } else {
                    el.textContent = endValue;
                }
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observer.observe(stat));
    console.log(`✓ ${statNumbers.length} counters initialised`);
}


/* ==============================================
   AUTO-INIT
   Runs when DOM is ready
   ============================================== */

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initMenuPage, 500));
} else {
    setTimeout(initMenuPage, 500);
}
