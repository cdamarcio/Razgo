/* RAZGO - Interatividade */

// Inicializa os ícones do Lucide
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// Animação de revelação ao rolar (Scroll Reveal)
const revealOnScroll = () => {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach((card, index) => {
        // Estilos iniciais para animação
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index % 3 * 0.1}s`;
        
        observer.observe(card);
    });
};

// Efeito de sombra na Navbar ao rolar
const handleNavbar = () => {
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            nav.style.padding = '1rem 8%';
        } else {
            nav.style.boxShadow = 'none';
            nav.style.padding = '1.2rem 8%';
        }
    });
};

// Execução ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    handleNavbar();
});