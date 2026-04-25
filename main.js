document.addEventListener('DOMContentLoaded', () => {
    
    // Global Glow Cursor
    const glowCursor = document.getElementById('glowCursor');
    
    document.addEventListener('mousemove', (e) => {
        if (glowCursor) {
            glowCursor.style.left = `${e.clientX}px`;
            glowCursor.style.top = `${e.clientY}px`;
        }
    });

    // Handle mouse leaving window
    document.addEventListener('mouseleave', () => {
        if (glowCursor) glowCursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        if (glowCursor) glowCursor.style.opacity = '1';
    });

    // Card specific glow tracking
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const glow = card.querySelector('.card-glow');
            if (glow) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                glow.style.left = `${x}px`;
                glow.style.top = `${y}px`;
            }
        });
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
});
