const navegação = document.querySelector('.navegação');
const menu = document.querySelector('.menu');
const cima = document.querySelector('.fa-brands');
let timer;

navegação.addEventListener('click', () =>{
    navegação.classList.toggle('ativo');
    menu.classList.toggle('ativo');
});

function exibirBotão() {
    cima.classList.add('visivel');
    clearTimeout(timer);
    timer = setTimeout(() => {
      cima.classList.remove('visivel');
    }, 2000);
  }
  
  window.addEventListener('scroll', () =>{
    exibirBotão()
  })