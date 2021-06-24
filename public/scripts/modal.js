export default function Modal(){

  const modalWrapper = document.querySelector('.modal-wrapper');
  const cancelButtons = document.querySelectorAll('.button.cancel');

  cancelButtons.forEach((button) => {
    button.addEventListener('click', close);
  });
  
  function open(){
    modalWrapper.classList.add('active');
  }
  function close(){
    modalWrapper.classList.remove('active');
  }

  return{
    open,
    close
  }
}