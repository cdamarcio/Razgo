lucide.createIcons();

// Smooth Scroll para os links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de revelação ao rolar
const reveal = () => {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', reveal);
// Setup inicial para animação
document.querySelectorAll('.item').forEach(i => {
    i.style.opacity = '0';
    i.style.transform = 'translateY(30px)';
    i.style.transition = 'all 0.6s ease-out';
});