document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');

    // Add scroll tracking for header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle (simple version)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (mainNav.style.display === 'block') {
                mainNav.style.display = 'none';
            } else {
                mainNav.style.display = 'block';
                mainNav.style.position = 'absolute';
                mainNav.style.top = '100%';
                mainNav.style.left = '0';
                mainNav.style.width = '100%';
                mainNav.style.backgroundColor = 'var(--white)';
                mainNav.style.padding = '20px';
                mainNav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                
                const navUl = mainNav.querySelector('ul');
                navUl.style.flexDirection = 'column';
                navUl.style.gap = '15px';
                
                const navLinks = mainNav.querySelectorAll('a');
                navLinks.forEach(link => {
                    link.style.color = 'var(--text-color)';
                });
            }
        });
    }
});
