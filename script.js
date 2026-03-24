/**
 * RAZGO - Script de Interatividade e Performance
 */

// 1. Inicializa os ícones do Lucide
lucide.createIcons();

// 2. Elementos de Navegação
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');

/**
 * Função para alternar o Menu Mobile
 */
function toggleMenu() {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Altera ícone do botão
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
}

// Listeners
menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Fecha menu ao clicar em links (âncoras)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

/**
 * Ajuste de Scroll Suave para o Header Fixo
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});