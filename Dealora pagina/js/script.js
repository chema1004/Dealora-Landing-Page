// Dealora Landing Page JavaScript - CORREGIDO

document.addEventListener('DOMContentLoaded', function() {
    console.log('Dealora landing page loaded successfully!');

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            // Change icon based on state
            const icon = mobileMenuButton.querySelector('svg');
            if (mobileMenu.classList.contains('hidden')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            }
        });
    }

    // Waitlist Form Handling
    const waitlistForm = document.getElementById('waitlist-form');
    const successMessage = document.getElementById('success-message');
    
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(waitlistForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const userType = formData.get('user-type');
            
            // Simulate form submission
            const submitButton = waitlistForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.innerHTML = 'Procesando...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                successMessage.classList.remove('hidden');
                
                // Reset form
                waitlistForm.reset();
                
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
                
                console.log('Form submitted:', { name, email, userType });
                
            }, 1500);
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.faq-icon');
            
            // Toggle active class
            this.classList.toggle('active');
            
            // Toggle answer visibility
            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                icon.textContent = '−';
            } else {
                answer.classList.add('hidden');
                icon.textContent = '+';
            }
            
            // Close other FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.classList.remove('active');
                    const otherAnswer = otherQuestion.nextElementSibling;
                    const otherIcon = otherQuestion.querySelector('.faq-icon');
                    otherAnswer.classList.add('hidden');
                    otherIcon.textContent = '+';
                }
            });
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    const icon = mobileMenuButton.querySelector('svg');
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                }
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('shadow-lg');
            header.classList.remove('shadow-sm');
        } else {
            header.classList.remove('shadow-lg');
            header.classList.add('shadow-sm');
        }
    });

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.setAttribute('aria-label', 'Volver al inicio');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Form validation
    const inputs = document.querySelectorAll('input[required], select[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.classList.add('border-red-500');
            } else {
                this.classList.remove('border-red-500');
            }
        });
    });

    // Safe counter animation ONLY for valid numbers
    const startSafeCounters = () => {
        const statsElements = document.querySelectorAll('.text-2xl.font-bold.text-gray-900');
        
        statsElements.forEach(element => {
            const textContent = element.textContent.trim();
            
            // Only animate if it's a plain number (not "500+" or "70%")
            if (/^\d+$/.test(textContent)) {
                const target = parseInt(textContent);
                
                if (!isNaN(target) && target > 0) {
                    let current = 0;
                    const increment = target / 50;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            element.textContent = target;
                            clearInterval(timer);
                        } else {
                            element.textContent = Math.floor(current);
                        }
                    }, 50);
                }
            }
        });
    };

    // Initialize counters only if the section exists and has valid numbers
    const statsSection = document.querySelector('.flex.items-center.space-x-8');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startSafeCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(statsSection);
    }
});

// Add some utility functions
const DealoraUtils = {
    // Format number with commas
    formatNumber: (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    
    // Debounce function for performance
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Get current year for copyright
    getCurrentYear: () => {
        return new Date().getFullYear();
    }
};

// Update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const copyrightElement = document.querySelector('footer p');
    if (copyrightElement) {
        const currentYear = DealoraUtils.getCurrentYear();
        copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2024', currentYear);
    }
});

// CSS for back-to-top button and animations
const style = document.createElement('style');
style.textContent = `
    .back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        border: none;
        font-size: 20px;
    }

    .back-to-top.visible {
        opacity: 1;
        visibility: visible;
    }

    .back-to-top:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
        animation: fadeIn 0.6s ease-out forwards;
    }
    
    /* Remove spinner CSS to avoid NaN issues */
    .spinner {
        display: none;
    }
`;
document.head.appendChild(style);
