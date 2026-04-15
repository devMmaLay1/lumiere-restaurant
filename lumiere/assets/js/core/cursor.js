/* ================================================
   LUMIÈRE - CUSTOM CURSOR
   Gold dot cursor that follows mouse movement
   
   🔧 BUYER GUIDE:
   This creates a custom gold cursor on desktop devices.
   The cursor has two parts:
   - Large ring that follows with a delay (smooth trailing effect)
   - Small dot that follows immediately
   
   🔧 TO DISABLE: Delete the cursor HTML elements from your pages:
   <div class="custom-cursor"></div>
   <div class="custom-cursor-dot"></div>
   
   🔧 TO CHANGE COLOR: Edit .custom-cursor in animations.css
   ================================================ */

/**
 * Initialize custom cursor
 * Only works on desktop (1024px and above)
 * Mobile and tablet devices use default cursor
 */
function initCustomCursor() {
    // 🔧 EDIT: Change 1024 to adjust minimum screen width for custom cursor
    if (window.innerWidth < 1024) {
        return; // Don't initialize on mobile/tablet
    }
    
    // Get cursor elements
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    
    if (!cursor || !cursorDot) {
        console.warn('Custom cursor elements not found');
        return;
    }
    
    // Track mouse position
    let mouseX = 0;
    let mouseY = 0;
    
    // Track cursor position (with delay for smooth effect)
    let cursorX = 0;
    let cursorY = 0;
    
    // Show cursor when mouse moves
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Show cursors
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
        
        // Move dot immediately (no delay)
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    // Animate cursor with delay for smooth trailing effect
    function animateCursor() {
        // Calculate distance to move (creates smooth trailing)
        const distX = mouseX - cursorX;
        const distY = mouseY - cursorY;
        
        // 🔧 EDIT: Change 0.1 to adjust cursor speed (0.1 = slow/smooth, 0.5 = fast)
        // Move cursor 10% of the distance (adjust for speed)
        cursorX += distX * 0.1;
        cursorY += distY * 0.1;
        
        // Apply position
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Continue animation
        requestAnimationFrame(animateCursor);
    }
    
    // Start animation loop
    animateCursor();
    
    // Add hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, input, textarea, select, [role="button"]');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorDot.style.opacity = '0';
    });
    
    console.log('✓ Custom cursor initialized');
}


// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCustomCursor);
} else {
    initCustomCursor();
}


// Re-initialize on window resize (if crossing desktop threshold)
let wasDesktop = window.innerWidth >= 1024;

window.addEventListener('resize', () => {
    const isDesktop = window.innerWidth >= 1024;
    
    // Only re-initialize if crossing the threshold
    if (isDesktop && !wasDesktop) {
        initCustomCursor();
    }
    
    wasDesktop = isDesktop;
});