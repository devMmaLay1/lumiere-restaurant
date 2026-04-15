/* ================================================
   LUMIÈRE - COUNTER COMPONENT
   Animated number counters using CountUp.js
   Used on: Homepage, About page
   
   🔧 BUYER GUIDE:
   This animates numbers from 0 to their target value.
   
   🔧 HOW TO USE IN HTML:
   <span data-count="150">0</span>
   
   🔧 OPTIONAL ATTRIBUTES:
   - data-count="150"        → Target number (required)
   - data-duration="2.5"     → Animation duration in seconds
   - data-decimals="0"       → Number of decimal places
   - data-prefix="$"         → Text before number
   - data-suffix="+"         → Text after number
   
   Example: <span data-count="100" data-suffix="+">0</span>
   ================================================ */

/**
 * Initialize all counters on the page
 * Triggers when counter elements come into viewport
 */
function initCounters() {
    // CountUp v2 UMD exports as countUp.CountUp
    const CountUpConstructor = (typeof CountUp !== 'undefined')
        ? CountUp
        : (typeof countUp !== 'undefined' && countUp.CountUp)
            ? countUp.CountUp
            : undefined;

    // Check if CountUp is available
    if (!CountUpConstructor) {
        console.warn('⚠ CountUp.js not loaded');
        return;
    }
    
    // Find all counter elements
    // 🔧 EDIT: Add data-count attribute to elements you want to animate
    const counters = document.querySelectorAll('[data-count]');
    
    if (counters.length === 0) {
        console.log('ℹ No counters found on this page');
        return;
    }
    
    // Create intersection observer to trigger counters when visible
    const observerOptions = {
        threshold: 0.5,  // 🔧 EDIT: Change to 0.3 for earlier trigger, 0.8 for later (0-1 range)
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                // Mark as counted to prevent re-triggering
                entry.target.classList.add('counted');
                
                // Get counter configuration from data attributes
                const element = entry.target;
                const endValue = parseFloat(element.getAttribute('data-count'));
                const duration = parseFloat(element.getAttribute('data-duration')) || 2.5;
                const decimals = parseInt(element.getAttribute('data-decimals')) || 0;
                const prefix = element.getAttribute('data-prefix') || '';
                const suffix = element.getAttribute('data-suffix') || '';
                
                // Create CountUp instance
                const countUpInstance = new CountUpConstructor(element, endValue, {
                    startVal: 0,
                    duration: duration,
                    decimalPlaces: decimals,
                    prefix: prefix,
                    suffix: suffix,
                    separator: ',',
                    decimal: '.',
                    useEasing: true,
                    useGrouping: true
                });
                
                // Start the animation
                if (!countUpInstance.error) {
                    countUpInstance.start();
                } else {
                    console.error('CountUp error:', countUpInstance.error);
                    element.textContent = prefix + endValue + suffix;
                }
            }
        });
    }, observerOptions);
    
    // Observe all counter elements
    counters.forEach(counter => {
        observer.observe(counter);
    });
    
    console.log(`✓ ${counters.length} counter(s) initialized`);
}


/**
 * Manual counter trigger (if needed)
 * @param {string} selector - CSS selector for counter element
 */
function triggerCounter(selector) {
    const element = document.querySelector(selector);
    
    if (!element) {
        console.warn(`Counter element not found: ${selector}`);
        return;
    }
    
    if (typeof CountUp === 'undefined') {
        console.warn('⚠ CountUp.js not loaded');
        return;
    }
    
    const endValue = parseFloat(element.getAttribute('data-count'));
    const duration = parseFloat(element.getAttribute('data-duration')) || 2.5;
    const decimals = parseInt(element.getAttribute('data-decimals')) || 0;
    const prefix = element.getAttribute('data-prefix') || '';
    const suffix = element.getAttribute('data-suffix') || '';
    
    const countUp = new CountUp(element, endValue, {
        startVal: 0,
        duration: duration,
        decimalPlaces: decimals,
        prefix: prefix,
        suffix: suffix,
        separator: ',',
        decimal: '.',
        useEasing: true,
        useGrouping: true
    });
    
    if (!countUp.error) {
        countUp.start();
    } else {
        console.error('CountUp error:', countUp.error);
    }
}


// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initCounters,
        triggerCounter
    };
}
