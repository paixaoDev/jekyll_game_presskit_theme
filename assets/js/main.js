// Main JavaScript for Game Press Kit Theme
document.addEventListener('DOMContentLoaded', function() {
    console.log('Game Press Kit theme loaded');
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Highlight active section in sidebar navigation
    const presskitSections = document.querySelectorAll('.presskit-section');
    const sidebarNavLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');
    
    function updateActiveSection() {
        let current = '';
        
        presskitSections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        sidebarNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Update active section on scroll
    window.addEventListener('scroll', updateActiveSection);
    
    // Update active section on page load
    updateActiveSection();

    // Mobile navigation toggle (if needed)
    const sidebar = document.querySelector('.presskit-sidebar');
    const main = document.querySelector('.presskit-main');
    
    // Add mobile menu toggle for small screens
    if (window.innerWidth <= 768) {
        const toggleButton = document.createElement('button');
        toggleButton.className = 'mobile-toggle';
        toggleButton.innerHTML = '☰ Menu';
        toggleButton.style.cssText = `
            position: fixed;
            top: 10px;
            left: 10px;
            z-index: 1001;
            background: #3498db;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
        `;
        
        document.body.appendChild(toggleButton);
        
        toggleButton.addEventListener('click', function() {
            sidebar.classList.toggle('mobile-open');
        });
        
        // Close sidebar when clicking on main content
        main.addEventListener('click', function() {
            if (sidebar.classList.contains('mobile-open')) {
                sidebar.classList.remove('mobile-open');
            }
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            }
        });
    }

    // Mobile navigation toggle
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener('click', function() {
            navbarNav.classList.toggle('active');
            navbarToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarNav) {
                navbarNav.classList.remove('active');
            }
            if (navbarToggle) {
                navbarToggle.classList.remove('active');
            }
        });
    });

    // Simple scroll reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Add scroll reveal to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('scroll-reveal');
        observer.observe(section);
    });

    // Hero scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        setInterval(() => {
            scrollIndicator.style.transform = 'translateX(-50%) translateY(-5px)';
            setTimeout(() => {
                scrollIndicator.style.transform = 'translateX(-50%) translateY(0)';
            }, 500);
        }, 2000);
    }

    console.log('JavaScript initialization complete');
}); 