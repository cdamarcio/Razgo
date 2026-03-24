/**
 * RAZGO | Soluções Digitais
 * Core Script - Interatividade e Performance
 */

// 1. Inicializa os ícones da biblioteca Lucide
// Isso transforma as tags <i data-lucide="..."> em SVGs modernos
lucide.createIcons();

// 2. Seleção de Elementos Globais
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');
const navbar = document.querySelector('.navbar');

/**
 * Função para Alternar Menu Mobile
 * Gerencia as classes 'active' e troca o ícone de hambúrguer por 'X'
 */
function toggleMenu() {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Altera o ícone visualmente
    const iconTag = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        iconTag.setAttribute('data-lucide', 'x');
    } else {
        iconTag.setAttribute('data-lucide', 'menu');
    }
    
    // Re-processa os ícones para aplicar a mudança
    lucide.createIcons();
}

// 3. Event Listeners para o Menu
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Fecha o menu ao clicar no overlay (fundo escurecido)
overlay.addEventListener('click', toggleMenu);

// Fecha o menu automaticamente ao clicar em qualquer link da navegação
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

/**
 * 4. Efeito de Scroll Suave com Offset
 * Garante que o scroll não pare "em cima" do título devido à navbar fixa
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            const navHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/**
 * 5. Dinâmica da Navbar ao Scroll
 * Adiciona uma sombra e escurece o fundo ao rolar a página
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        navbar.style.background = 'rgba(10, 10, 12, 0.98)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(10, 10, 12, 0.95)';
    }
});

// 6. Log de Inicialização (Opcional - Debug)
console.log('RAZGO Engine: Ativa e carregando 96 modelos.');