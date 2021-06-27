const roomIdElement = document.querySelector('#room-id');
const roomId = roomIdElement.dataset.id;

roomIdElement.addEventListener('click', copy);

function copy(){
  const textArea = document.createElement('textarea');
  textArea.value = roomId;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}