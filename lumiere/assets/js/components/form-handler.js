/* ================================================
   LUMIÈRE - FORM HANDLER COMPONENT
   Generic form validation and submission
   Used on: Reservations, Events, Contact pages
   
   🔧 BUYER GUIDE:
   This handles form validation and submission for all forms.
   
   🔧 TO CONNECT TO YOUR BACKEND:
   1. Get a form endpoint from Formspree.io (free) or your own API
   2. Update submitEndpoint in the config below
   3. Forms will automatically submit to your endpoint
   
   🔧 VALIDATION RULES:
   Add these attributes to your HTML form fields:
   - required           → Field must be filled
   - type="email"       → Must be valid email
   - type="tel"         → Must be valid phone
   - minlength="10"     → Minimum character length
   - maxlength="500"    → Maximum character length
   ================================================ */

/**
 * Initialize form validation and submission
 * @param {string} formSelector - CSS selector for the form
 * @param {Object} options - Configuration options
 */
function initFormHandler(formSelector, options = {}) {
    const form = document.querySelector(formSelector);
    
    if (!form) {
        console.log(`ℹ Form not found: ${formSelector}`);
        return;
    }
    
    // Default options
    // 🔧 EDIT: Customize form behavior
    const config = {
        showSuccessMessage: true,
        successMessage: 'Thank you! Your submission has been received.',  // 🔧 EDIT: Custom success message
        successDuration: 5000,  // 🔧 EDIT: How long success message shows (milliseconds)
        resetOnSuccess: true,   // 🔧 EDIT: Clear form after successful submission
        scrollToSuccess: true,
        validateOnBlur: true,
        submitEndpoint: null,  // 🔧 EDIT: Set to your API endpoint (e.g., Formspree URL)
        onSuccess: null,       // Custom success callback
        onError: null,         // Custom error callback
        ...options
    };
    
    // ============================================
    // VALIDATION RULES
    // ============================================
    
    const validationRules = {
        required: (value) => value.trim() !== '',
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        phone: (value) => /^[\d\s\-\+\(\)]+$/.test(value) && value.replace(/\D/g, '').length >= 10,
        minLength: (value, min) => value.length >= min,
        maxLength: (value, max) => value.length <= max,
        number: (value) => !isNaN(value) && value.trim() !== '',
        date: (value) => !isNaN(Date.parse(value))
    };
    
    const errorMessages = {
        required: 'This field is required',
        email: 'Please enter a valid email address',
        phone: 'Please enter a valid phone number',
        minLength: 'This field is too short',
        maxLength: 'This field is too long',
        number: 'Please enter a valid number',
        date: 'Please enter a valid date'
    };
    
    // ============================================
    // VALIDATE SINGLE FIELD
    // ============================================
    
    function validateField(field) {
        const value = field.value;
        const fieldName = field.name || field.id;
        let isValid = true;
        let errorMessage = '';
        
        // Check required
        if (field.hasAttribute('required') && !validationRules.required(value)) {
            isValid = false;
            errorMessage = errorMessages.required;
        }
        
        // Check email
        if (isValid && field.type === 'email' && value !== '' && !validationRules.email(value)) {
            isValid = false;
            errorMessage = errorMessages.email;
        }
        
        // Check phone
        if (isValid && field.type === 'tel' && value !== '' && !validationRules.phone(value)) {
            isValid = false;
            errorMessage = errorMessages.phone;
        }
        
        // Check min length
        if (isValid && field.hasAttribute('minlength')) {
            const min = parseInt(field.getAttribute('minlength'));
            if (!validationRules.minLength(value, min)) {
                isValid = false;
                errorMessage = `Minimum ${min} characters required`;
            }
        }
        
        // Check max length
        if (isValid && field.hasAttribute('maxlength')) {
            const max = parseInt(field.getAttribute('maxlength'));
            if (!validationRules.maxLength(value, max)) {
                isValid = false;
                errorMessage = `Maximum ${max} characters allowed`;
            }
        }
        
        // Update field UI
        if (isValid) {
            field.classList.remove('error');
            removeErrorMessage(field);
        } else {
            field.classList.add('error');
            showErrorMessage(field, errorMessage);
        }
        
        return isValid;
    }
    
    // ============================================
    // ERROR MESSAGE DISPLAY
    // ============================================
    
    function showErrorMessage(field, message) {
        // Remove existing error message
        removeErrorMessage(field);
        
        // Create error message element
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error-message';
        errorDiv.textContent = message;
        
        // Insert after field
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
    }
    
    function removeErrorMessage(field) {
        const existingError = field.parentNode.querySelector('.form-error-message');
        if (existingError) {
            existingError.remove();
        }
    }
    
    // ============================================
    // VALIDATE ALL FIELDS
    // ============================================
    
    function validateForm() {
        const fields = form.querySelectorAll('input, textarea, select');
        let isValid = true;
        
        fields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    // ============================================
    // SHOW SUCCESS MESSAGE
    // ============================================
    
    function showSuccessMessage() {
        // Remove existing success message
        const existingSuccess = form.querySelector('.form-success');
        if (existingSuccess) {
            existingSuccess.remove();
        }
        
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success show';
        successDiv.textContent = config.successMessage;
        
        // Insert at top of form
        form.insertBefore(successDiv, form.firstChild);
        
        // Scroll to success message
        if (config.scrollToSuccess) {
            successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
        // Auto-hide after duration
        if (config.successDuration > 0) {
            setTimeout(() => {
                successDiv.classList.remove('show');
                setTimeout(() => successDiv.remove(), 300);
            }, config.successDuration);
        }
    }
    
    // ============================================
    // FORM SUBMISSION
    // ============================================
    
    async function handleSubmit(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            console.log('⚠ Form validation failed');
            return;
        }
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        console.log('📤 Form data:', data);
        
        // Disable submit button
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }
        
        try {
            // If endpoint is provided, submit to API
            if (config.submitEndpoint) {
                const response = await fetch(config.submitEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                
                if (!response.ok) {
                    throw new Error('Submission failed');
                }
                
                const result = await response.json();
                console.log('✓ Form submitted successfully:', result);
            } else {
                // Simulate submission (for demo purposes)
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log('✓ Form validated (no endpoint configured)');
            }
            
            // Show success message
            if (config.showSuccessMessage) {
                showSuccessMessage();
            }
            
            // Reset form
            if (config.resetOnSuccess) {
                form.reset();
                // Remove error states
                form.querySelectorAll('.error').forEach(field => {
                    field.classList.remove('error');
                    removeErrorMessage(field);
                });
            }
            
            // Call custom success callback
            if (typeof config.onSuccess === 'function') {
                config.onSuccess(data);
            }
            
        } catch (error) {
            console.error('✗ Form submission error:', error);
            
            // Call custom error callback
            if (typeof config.onError === 'function') {
                config.onError(error);
            } else {
                alert('Sorry, there was an error submitting the form. Please try again.');
            }
        } finally {
            // Re-enable submit button
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit';
            }
        }
    }
    
    // ============================================
    // EVENT LISTENERS
    // ============================================
    
    // Validate on blur (optional)
    if (config.validateOnBlur) {
        const fields = form.querySelectorAll('input, textarea, select');
        fields.forEach(field => {
            field.addEventListener('blur', () => validateField(field));
        });
    }
    
    // Handle form submission
    form.addEventListener('submit', handleSubmit);
    
    console.log(`✓ Form handler initialized: ${formSelector}`);
}


// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initFormHandler
    };
}
