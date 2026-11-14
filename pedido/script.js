const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');
const telaPergunta = document.getElementById('tela-pergunta');
const telaFoto = document.getElementById('tela-foto');
const musica = document.getElementById('musica');

function fugir() {
    const margem = 30;
    const larguraMax = window.innerWidth - btnNao.offsetWidth - margem;
    const alturaMax = window.innerHeight - btnNao.offsetHeight - margem;

    const novoX = Math.max(margem, Math.floor(Math.random() * larguraMax));
    const novoY = Math.max(margem, Math.floor(Math.random() * alturaMax));

    btnNao.style.position = 'fixed';
    btnNao.style.left = novoX + 'px';
    btnNao.style.top = novoY + 'px';
}

btnNao.addEventListener('mouseenter', fugir);
btnNao.addEventListener('touchstart', function(e) {
    e.preventDefault();
    fugir();
});

btnSim.addEventListener('click', function() {
    telaPergunta.classList.add('escondido');
    btnNao.classList.add('escondido');
    telaFoto.classList.remove('escondido');
    
    // Toca a música assim que a foto aparece
    musica.play();
});