function openModal(){
    const modal = document.getElementById('modal-container');
    modal.classList.add('mostrar');

    function closeModal() {
        modal.classList.remove('mostrar');
        localStorage.fechaModal = 'modal-container';
    }

    modal.addEventListener('click', (e) => {
        if (e.target.id === 'modal-container' || e.target.id === 'fechar') {
            closeModal();
        }
    });

    // Adicionar evento para fechar o modal ao pressionar Esc
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}
