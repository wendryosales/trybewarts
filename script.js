// Validação do e-mail e senha

const email = document.querySelectorAll('input')[0];
const senha = document.querySelectorAll('input')[1];
const botaoEnviar = document.querySelector('button');


function validation() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoEnviar.addEventListener('click', validation);

// Botão de aceitar termos



const aceitarTermos = document.querySelector('#agreement')
const enviarForm = document.querySelector('#submit-btn')

function acepet() {
if(aceitarTermos.checked){
  enviarForm.removeAttribute('disabled')
}else{
  enviarForm.setAttribute('disabled','disable')
}

}
aceitarTermos.addEventListener('click', acepet);