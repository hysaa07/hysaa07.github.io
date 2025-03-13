
document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.menu-link');
    
    // Adiciona event listener para cada link do menu
    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetUrl = this.getAttribute('href'); // Pegando o link da página alvo
            window.location.href = targetUrl; // Redireciona para a nova página
        });
    });
});
