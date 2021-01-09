const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const mensagem = document.getElementById('mensagem')
const enviar = document.getElementById('enviar')
const resultado = document.getElementById('resultado')

const green = `<span style='color: green;'>`;


nome.focus()

form.onsubmit = function (event) {
  event.preventDefault()

  if (!nome.value | !isNaN(nome.value)) {
    resultado.className = 'error'
    nome.value = ''
    nome.focus()
    return
    } else if (nome.value.length < 5) {
    resultado.innerHTML = `Insira seu nome corretamente!
    <br>
    <span style='color: green;'>
    Correto: Beatriz ☑
    </span>
    <br>
    Errado: Bia ☒
    `
    resultado.className = 'error'
    nome.value = ''
    nome.focus()
    return
  }

  if (!email.value) {
    resultado.className = 'error'
    email.value = ''
    email.focus()
    return
    }

  if (!telefone.value) {
    resultado.innerText = 'Insira seu número de telefone!'
    resultado.className = 'error';
    telefone.value = ''
    telefone.focus()
    return
  }

  const number = parseInt(telefone.value, 10);
  if (isNaN(number)) {
    resultado.className = "error";
    telefone.value = "";
    telefone.focus();
    return;
    } else if (telefone.value.length < 9) {
    resultado.innerHTML = `
    Seu número de telefone 
    <br>
    deve conter no mínimo 9 números!`
    resultado.className = 'error'
    telefone.value = ''
    telefone.focus()
    return
  }

  if (!mensagem.value) {
    resultado.innerText = 'Insira sua Mensagem!'
    resultado.className = 'error'
    mensagem.value = ''
    mensagem.focus()
    return
  } else if (mensagem.value.length < 10) {
  resultado.innerText = 'Sua mensagem deve conter no mínimo 10 caracteres!'
  resultado.className = 'error'
  mensagem.value = ''
  mensagem.focus()
  return
}

    resultado.innerHTML = green + `Mensagem enviada com sucesso, aguarde nosso retorno!</span>`
    resultado.className = ''
    nome.value = email.value = telefone.value = mensagem.value = ''
    nome.focus()
}
