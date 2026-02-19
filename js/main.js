// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {


 
    

    
    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    
    // Add animation on scroll for service cards
    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
                serviceObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-up2').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(80px)';
        card.style.transition = 'all 0.6s ease';
        serviceObserver.observe(card);
    });




});


