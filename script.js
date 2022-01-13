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
const aceitarTermos = document.querySelector('#agreement');
const enviarForm = document.querySelector('#submit-btn');

function acepet() {
  if (aceitarTermos.checked) {
    enviarForm.removeAttribute('disabled');
  } else {
    enviarForm.setAttribute('disabled', 'disabled');
  }
}

aceitarTermos.addEventListener('click', acepet);

// Contador de caracteres
const txtarea = document.querySelector('textarea');
const count = document.querySelector('#counter');

function contador() {
  const inicial = 500;
  const caracteres = txtarea.value.length;

  count.innerHTML = inicial - caracteres;
}

txtarea.addEventListener('input', contador);

// verifica se é TRUE as opções

const verification = (classe) => {
  const classi = document.getElementsByClassName(classe);

  for (let i = 0; i < classi.length; i += 1) {
    if (classi[i].checked === true) {
      sessionStorage.setItem(classe, classi[i].value);
    }
  }
};

// função para materia

const materia = (classe) => {
  const classi = document.getElementsByClassName(classe);
  const array = [];

  for (let i = 0; i < classi.length; i += 1) {
    if (classi[i].checked === true) {
      array.push(classi[i].value);
      sessionStorage.setItem('materias', array);
    }
  }
};

// salvar os dados no sessionstorage

const saveStorage = () => {
  sessionStorage.setItem('nome', document.querySelector('#input-name').value);
  sessionStorage.setItem('email', document.querySelector('#input-email').value);
  sessionStorage.setItem('casa', document.querySelector('#house').selectedOptions[0].value);
  verification('familia');
  materia('materias');
  verification('avaliacao');
  sessionStorage.setItem('observacoes', document.querySelector('textarea').value);
};

const botaoSubmit = document.querySelector('#submit-btn');
botaoSubmit.addEventListener('click', saveStorage);
