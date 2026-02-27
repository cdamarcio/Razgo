// Banco de Dados do Portal RAZGO 2026
const bancoDados = {
    inicio: [
        { nome: "SEFA PA", info: "Auditor e Fiscal (Nível Superior)", valor: "R$ 16.659", status: "Aberto", cor: "danger", link: "#" },
        { nome: "IBGE", info: "39.108 Vagas Temporárias", valor: "Até R$ 6.100", status: "Previsto", cor: "warning text-dark", link: "#" },
        { nome: "SEFAZ-TO", info: "Auditor Fiscal e Técnico", valor: "R$ 18.500", status: "Autorizado", cor: "info", link: "#" }
    ],
    federal: [
        { nome: "Banco do Brasil", info: "Escriturário e TI", valor: "R$ 5.400+", status: "Estudo", cor: "secondary", link: "#" },
        { nome: "DNIT", info: "Engenheiro Civil e Analista", valor: "R$ 15.200", status: "Previsto", cor: "warning text-dark", link: "#" },
        { nome: "INSS", info: "Técnico (Médio) e Analista", valor: "R$ 9.120", status: "Solicitado", cor: "secondary", link: "#" },
        { nome: "Petrobras", info: "Engenharia e Nível Técnico", valor: "R$ 13.000", status: "Previsto", cor: "info", link: "#" }
    ],
    pa: [
        { nome: "SEFA PA", info: "Diversos Cargos / Eng. Civil", valor: "R$ 16.659", status: "Aberto", cor: "danger", link: "#" },
        { nome: "Polícia Científica PA", info: "Perito Criminal", valor: "R$ 12.954", status: "Comissão", cor: "info", link: "#" },
        { nome: "Prefeitura de Redenção", info: "1.021 Vagas - Vários Níveis", valor: "Até R$ 8.500", status: "Licitação", cor: "warning text-dark", link: "#" },
        { nome: "Prefeitura de Juruti", info: "Saúde, Ed. e Adm", valor: "Diversos", status: "Aberto", cor: "danger", link: "#" }
    ],
    to: [
        { nome: "SEFAZ-TO", info: "Auditor da Receita Estadual", valor: "R$ 18.500", status: "Autorizado", cor: "info", link: "#" },
        { nome: "SES-TO (Saúde)", info: "Médicos, Enf. e Administrativo", valor: "Até R$ 12.000", status: "Anunciado", cor: "warning text-dark", link: "#" },
        { nome: "Pref. Couto Magalhães", info: "Saúde e Administrativo", valor: "Vários", status: "Comissão", cor: "secondary", link: "#" },
        { nome: "Câmara de Palmas", info: "Analista e Técnico", valor: "R$ 5.600", status: "Aberto", cor: "danger", link: "#" }
    ],
    go: [
        { nome: "SEFAZ-GO", info: "Auditor Fiscal", valor: "R$ 28.563", status: "Aberto", cor: "danger", link: "#" },
        { nome: "PM-GO", info: "Soldado e Oficial", valor: "Até R$ 13.900", status: "Previsto", link: "#", cor: "info" },
        { nome: "Câmara de Goiânia", info: "Analista e Guarda Legislativo", valor: "R$ 10.000", status: "Aberto", cor: "danger", link: "#" }
    ],
    ma: [
        { nome: "TCE-MA", info: "Analista de Controle Externo", valor: "R$ 17.000", status: "Comissão", cor: "info", link: "#" },
        { nome: "Polícia Penal MA", info: "Especialista e Agente", valor: "R$ 5.172", status: "Autorizado", cor: "warning text-dark", link: "#" },
        { nome: "SEDUC-MA", info: "Professor e Área Técnica", valor: "A definir", status: "Anunciado", cor: "info", link: "#" }
    ],
    materiais: [
        { nome: "Combo Eng. Civil 2026", info: "Materiais p/ DNIT e SEFA-PA", valor: "R$ 97,00", status: "PDF", cor: "success", link: "https://wa.me/SEUNUMERO?text=Quero+Combo+Engenharia" },
        { nome: "Curso NR-10 e NR-35", info: "Certificado + Apostila (MR Treinamentos)", valor: "R$ 150,00", status: "Completo", cor: "success", link: "https://wa.me/SEUNUMERO?text=Quero+Cursos+NR" },
        { nome: "Simulados SEFAZ-TO", info: "Questões comentadas Auditor", valor: "R$ 47,00", status: "Ebook", cor: "success", link: "https://wa.me/SEUNUMERO?text=Quero+Simulados+TO" },
        { nome: "Guia Pref. Couto Magalhães", info: "Conhecimentos locais e gerais", valor: "R$ 35,00", status: "PDF", cor: "success", link: "https://wa.me/SEUNUMERO?text=Quero+Guia+Couto" }
    ]
};

function mudarAba(categoria) {
    const tabela = document.getElementById('tabela-corpo');
    const titulo = document.getElementById('titulo-pagina');
    const subtitulo = document.getElementById('subtitulo-pagina');
    
    // Limpa a tabela
    tabela.innerHTML = "";

    // Configura os textos do Header
    const titulosMap = {
        inicio: "Principais Oportunidades",
        federal: "Concursos Federais",
        pa: "Estado do Pará",
        to: "Estado do Tocantins",
        go: "Estado de Goiás",
        ma: "Estado do Maranhão",
        materiais: "Loja de Materiais Razgo"
    };

    const subtitulosMap = {
        materiais: "Acelere sua aprovação com nossos materiais exclusivos.",
        inicio: "Confira os editais mais quentes para este mês."
    };

    titulo.innerText = titulosMap[categoria] || "Concursos 2026";
    subtitulo.innerText = subtitulosMap[categoria] || "Acompanhe editais abertos e previstos para sua região.";

    // Preenche a tabela com os dados da categoria
    bancoDados[categoria].forEach(item => {
        const textoBotao = categoria === 'materiais' ? 'ADQUIRIR' : 'VER EDITAL';
        const iconeBotao = categoria === 'materiais' ? 'fas fa-cart-plus' : 'fas fa-external-link-alt';

        tabela.innerHTML += `
            <tr>
                <td class="ps-4">
                    <div class="fw-bold text-dark">${item.nome}</div>
                </td>
                <td><small class="text-muted">${item.info}</small></td>
                <td><span class="text-primary fw-bold">${item.valor}</span></td>
                <td><span class="badge bg-${item.cor}">${item.status}</span></td>
                <td class="text-center">
                    <a href="${item.link}" target="_blank" class="btn ${categoria === 'materiais' ? 'btn-success' : 'btn-dark'} btn-sm px-3 shadow-sm">
                        <i class="${iconeBotao} me-1"></i> ${textoBotao}
                    </a>
                </td>
            </tr>
        `;
    });

    // Fecha o menu hambúrguer no mobile após clicar
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
    }
}

// Inicia na aba principal
window.onload = () => mudarAba('inicio');