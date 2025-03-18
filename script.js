
// Função para mostrar a seção ativa
function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Exibe a seção selecionada
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// Inicializa a página com a primeira seção visível
document.addEventListener("DOMContentLoaded", () => {
    showSection('home');
});