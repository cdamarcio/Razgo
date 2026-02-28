/* RAZGO - Interatividade */
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// Animação de revelação ao rolar
const revealOnScroll = () => {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index % 3 * 0.1}s`;
        observer.observe(card);
    });
};

document.addEventListener('DOMContentLoaded', revealOnScroll);