document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector('.modal');
    const acceptButton = document.querySelector('.modal-container-footer .button.is-primary');
    const declineButton = document.querySelector('.modal-container-footer .button.is-ghost');

    // Função para abrir o modal
    function openModal() {
        modal.style.display = 'flex'; // Mostra o modal
        document.body.style.overflow = 'hidden'; // Desabilita o scroll do body
    }

    // Função para aceitar os termos
    acceptButton.addEventListener('click', function() {
        modal.style.display = 'none'; // Esconde o modal
        document.body.style.overflow = 'auto'; // Habilita o scroll do body
    });

    // Função para recusar os termos
    declineButton.addEventListener('click', function() {
        alert("Você precisa aceitar os termos para continuar.");
    });

    openModal(); // Abre o modal ao carregar a página
});
