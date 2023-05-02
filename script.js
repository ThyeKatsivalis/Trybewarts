const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btn = document.querySelector('#btn');
const agreement = document.getElementById('agreement');
const submitbtn = document.getElementById('submit-btn');
const coment = document.getElementById('comentario');

function contadorDeCaracteres(campoPassado) {
  const limite = 500;
  const campo = campoPassado.value.lenght;
  const maxlength = document.getElementById('comentario').setAttribute('maxlenght', limite);
  const divmsg = document.getElementById('divmsg');
  const restante = limite - campo;
  divmsg.innerHTML = `${limite} + " " + ${restante}`;
}

function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btn.addEventListener('click', login);

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitbtn.disabled = false;
  }
});

addEventListener('click', login);onclick="contadorDeCaracteres(comentario)" 

onkeydown=contadorDeCaracteres(comentario) 
      onkeyup=contadorDeCaracteres(comentario)
