//SMOOTH SCROLLING FOR NAVIGATION LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

//HIGHLIGHT ACTIVE NAVIGATION LINK ON SCROLL
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.background = '';
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.background = '#667eea';
            link.style.color = 'white';
        }
    });
});

//FADE-IN ANIMATION ON SCROLL FOR SECTIONS
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Make hero visible immediately
document.querySelector('.hero').style.opacity = '1';
document.querySelector('.hero').style.transform = 'translateY(0)';

//CONSOLE MESSAGE FOR DEVELOPERS
console.log('%c🔐 Cybersecurity Concepts', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cEducational website built with semantic HTML5, CSS3, and vanilla JavaScript', 'font-size: 12px; color: #666;');
console.log('%cCode generated with assistance from Claude (Anthropic AI)', 'font-size: 11px; color: #888;');

//MOBILE MENU TOGGLE (Optional Enhancement)
// You can add a hamburger menu for better mobile experience if needed
// This is a placeholder for future enhancement
