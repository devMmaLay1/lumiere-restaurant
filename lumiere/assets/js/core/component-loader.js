/* ================================================
   LUMIÈRE - COMPONENT LOADER
   Loads reusable HTML components via fetch
   
   🔧 BUYER GUIDE:
   This file loads shared components (navbar, footer) into every page.
   This means you only need to edit navbar.html and footer.html ONCE,
   and the changes appear on all pages automatically.
   
   You typically DON'T need to edit this file.
   ================================================ */

/**
 * Load a component from the components folder
 * 
 * 🔧 HOW IT WORKS:
 * 1. Finds the container element on the page (e.g., #navbar-container)
 * 2. Fetches the component HTML file (e.g., components/navbar.html)
 * 3. Inserts the HTML into the container
 * 
 * @param {string} selector - CSS selector for the container element
 * @param {string} file - Path to the component file
 * @returns {Promise<void>}
 */
async function loadComponent(selector, file) {
    try {
        // Find the container element
        const container = document.querySelector(selector);
        
        if (!container) {
            console.warn(`Container not found: ${selector}`);
            return;
        }
        
        // Fetch the component HTML
        const response = await fetch(file);
        
        if (!response.ok) {
            throw new Error(`Failed to load ${file}: ${response.status}`);
        }
        
        // Get the HTML content
        const html = await response.text();
        
        // Insert the HTML into the container
        container.innerHTML = html;
        
        console.log(`✓ Component loaded: ${file}`);
        
    } catch (error) {
        console.error(`✗ Error loading component ${file}:`, error);
        
        // Show error message in the container for debugging
        const container = document.querySelector(selector);
        if (container) {
            container.innerHTML = `
                <div style="padding: 1rem; background: #e74c3c; color: white; text-align: center;">
                    Failed to load component: ${file}
                </div>
            `;
        }
    }
}


/**
 * Load multiple components in parallel
 * @param {Array<{selector: string, file: string}>} components - Array of component configs
 * @returns {Promise<void>}
 */
async function loadComponents(components) {
    try {
        // Load all components in parallel for better performance
        const promises = components.map(({ selector, file }) => 
            loadComponent(selector, file)
        );
        
        await Promise.all(promises);
        
        console.log('✓ All components loaded successfully');
        
    } catch (error) {
        console.error('✗ Error loading components:', error);
    }
}


/**
 * Initialize component loading on DOM ready
 * This function is called from main.js
 * 
 * 🔧 TO ADD A NEW COMPONENT:
 * 1. Create your component HTML file in the components/ folder
 * 2. Add a container div in your HTML page (e.g., <div id="my-component-container"></div>)
 * 3. Add it to the componentsToLoad array below
 * 
 * @returns {Promise<void>}
 */
async function initComponentLoader() {
    // Define components to load
    // 🔧 EDIT: Add or remove components as needed
    const componentsToLoad = [
        {
            selector: '#navbar-container',  // Container ID in HTML pages
            file: 'components/navbar.html'  // Component file path
        },
        {
            selector: '#footer-container',
            file: 'components/footer.html'
        },
        {
            selector: '#reservation-cta-container',
            file: 'components/reservation-cta.html'
        }
    ];
    
    // Load all components and wait for completion
    await loadComponents(componentsToLoad);
    
    // Initialize navbar after components are loaded
    if (typeof initNavbar === 'function') {
        // Small delay to ensure DOM is fully updated
        setTimeout(() => {
            initNavbar();
            console.log('✓ Navbar initialized after component load');
        }, 100);
    }
    
    // Initialize smooth scroll after components are loaded
    if (typeof initSmoothScroll === 'function') {
        initSmoothScroll();
    }
    
    // Initialize custom cursor after components are loaded
    if (typeof initCursor === 'function') {
        initCursor();
    }
    
    // Initialize page loader after components are loaded
    if (typeof initLoader === 'function') {
        initLoader();
    }
}


// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadComponent,
        loadComponents,
        initComponentLoader
    };
}