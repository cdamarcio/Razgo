lucide.createIcons();

// Revelação Suave dos Cards
const reveal = () => {
    const cards = document.querySelectorAll('.card-case');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', reveal);
// Inicializa os cards invisíveis para o efeito
document.querySelectorAll('.card-case').forEach(c => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(40px)';
    c.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
});