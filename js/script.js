const navegação = document.querySelector('.navegação');
const menu = document.querySelector('.menu');

navegação.addEventListener('click', () =>{
    navegação.classList.toggle('ativo');
    menu.classList.toggle('ativo');
});


