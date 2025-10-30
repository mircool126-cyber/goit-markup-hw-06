(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),  // ✅ кнопка “Order Service”
    closeModalBtn: document.querySelector('[data-modal-close]'), // ✅ хрестик у модалці
    modal: document.querySelector('[data-modal]'),               // ✅ бекдроп
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
    
  }
})();