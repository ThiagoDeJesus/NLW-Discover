const URL = window.location.search;
const URLParams = new URLSearchParams(URL);

const alertWrapper = document.querySelector('.alert-wrapper');
const btnCloseAlert = document.querySelector('.alert-wrapper .button');

btnCloseAlert.addEventListener('click', closeAlert);

if(URLParams.has('alert')){
  switch(URLParams.get('alert')){
    case 'roomInexistent':
      openAlert('Código da sala incorreto :(', 'Por favor, verifique o código e tente novamente.');
      break;
    case 'incorrectPassword':
      openAlert('Senha incorreta :(', 'Por favor, verifique a senha e tente novamente.');
      break;
    case 'roomDurationTime':
      if(!window.sessionStorage.getItem('alert')){
        window.sessionStorage.setItem('alert', true);
        openAlert('A sala será apagada automáticamente', 'As salas e as perguntas são apagadas 24 horas após a criação.');
      }
      break;
  }
}

function openAlert(title, message){
  const elementTitle = document.querySelector('.alert h3');
  const elementMessage = document.querySelector('.alert p');

  elementTitle.innerText = title;
  elementMessage.innerText = message;
  
  alertWrapper.classList.add('active')
}

function closeAlert(){
  alertWrapper.classList.remove('active');
}