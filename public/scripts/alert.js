const URL = window.location.search;
const URLParams = new URLSearchParams(URL);

const alertWrapper = document.querySelector('.alert-wrapper');
const btnCloseAlert = document.querySelector('.alert-wrapper .button');

btnCloseAlert.addEventListener('click', closeAlert);

if(URLParams.has('alert')){
  switch(URLParams.get('alert')){
    case 'roomInexistent':
      openAlert();
      break;
    case 'incorrectPassword':
      openAlert();
      break;
  }
}

function openAlert(){
  alertWrapper.classList.add('active')
}

function closeAlert(){
  alertWrapper.classList.remove('active');
}