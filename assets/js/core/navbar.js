/* ================================================
   LUMIÈRE - NAVBAR FUNCTIONALITY
   Scroll behavior, active links, mobile menu
   
   🔧 BUYER GUIDE:
   This file controls the navigation bar behavior:
   - Adds background when scrolling down
   - Highlights the current page link
   - Opens/closes mobile menu
   - Shows/hides "Back to Top" button
   
   You typically DON'T need to edit this file.
   To change navbar content, edit: components/navbar.html
   ================================================ */

/**
 * Initialize navbar functionality
 * Called automatically after navbar component loads
 */
function initNavbar() {
    console.log('🔍 Navbar init: Starting...');
    
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.navbar-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');
    
    console.log('🔍 Navbar elements found:', {
        navbar: !!navbar,
        mobileToggle: !!mobileToggle,
        mobileMenu: !!mobileMenu,
        mobileLinksCount: mobileLinks.length
    });
    
    if (!navbar) {
        console.warn('⚠ Navbar element not found');
        return;
    }
    
    if (!mobileToggle) {
        console.warn('⚠ Mobile toggle not found');
        return;
    }
    
    if (!mobileMenu) {
        console.warn('⚠ Mobile menu not found');
        return;
    }
    
    // ============================================
    // SCROLL BEHAVIOR - Add background on scroll
    // 🔧 EDIT: Change scroll threshold below
    // ============================================
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // 🔧 EDIT: Change 50 to adjust when navbar background appears (in pixels)
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    
    // ============================================
    // ACTIVE LINK HIGHLIGHTING
    // ============================================
    
    function setActiveLink() {
        // Get current page path
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';
        
        // Find all nav links (both desktop and mobile)
        const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            
            // Remove active class from all
            link.classList.remove('active');
            
            // Add active class to current page
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage === '/' && linkHref === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    
    // Set active link on load
    setActiveLink();
    
    
    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const isActive = mobileToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Update aria-expanded for accessibility
        mobileToggle.setAttribute('aria-expanded', isActive);
        
        // Prevent body scroll when menu is open
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        console.log('Mobile menu toggled:', isActive ? 'open' : 'closed');
    });
    
    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside (on the overlay)
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    
    // ============================================
    // BACK TO TOP BUTTON
    // 🔧 EDIT: Change when button appears
    // ============================================
    
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            // 🔧 EDIT: Change 500 to adjust when button appears (in pixels scrolled)
            if (window.pageYOffset > 500) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top on click
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    console.log('✓ Navbar initialized successfully');
}


// initNavbar is available globally as a function declaration