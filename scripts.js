document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        // Toggle the icon between hamburger and close
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenuButton.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
        } else {
            mobileMenuButton.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
        }
    });
    
    // Close mobile menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
        });
    });
    
    // Scroll animations - Add class to elements when they come into view
    const animatedElements = document.querySelectorAll('.animate-fade-in-up');
    const checkVisibility = () => {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                el.style.opacity = 1; // Trigger the animation by changing opacity
                el.style.transform = 'translateY(0)';
            }
        });
    };
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check on load
    
    // Scrollspy functionality
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const mobileNavLinks = document.querySelectorAll('#mobile-menu a[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 50) { // 50px offset for better accuracy
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-primaryAccent');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-primaryAccent');
            }
        });
        
        mobileNavLinks.forEach(link => {
            link.classList.remove('text-primaryAccent');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-primaryAccent');
            }
        });
    });
    
    // Back to top button functionality with visibility toggle
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) { // Show button after scrolling 300px
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        // Initially hide the button
        backToTopButton.classList.add('hidden');
    }
    
    // Form submission handling with validation
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
    
    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
