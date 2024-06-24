const botaoSim = document.getElementById('botaoSim');
const botaoNao = document.getElementById('botaoNao');
const mensagem = document.getElementById('mensagem');
const canvas = document.getElementById('meuCanvas');
const context = canvas.getContext('2d');

// Função para desenhar um rosto sorridente no canvas
function desenharRostoSorridente() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI * 2, true);
    context.moveTo(85, 85);
    context.arc(80, 85, 5, 0, Math.PI, false);
    context.moveTo(115, 85);
    context.arc(110, 85, 5, 0, Math.PI, false);
    context.stroke();
    
    context.beginPath();
    context.arc(100, 100, 30, 0, Math.PI, false);
    context.stroke();
    
    context.beginPath();
    context.arc(85, 90, 5, 0, Math.PI * 2, true);
    context.fill();
    
    context.beginPath();
    context.arc(115, 90, 5, 0, Math.PI * 2, true);
    context.fill();
    
    context.beginPath();
    context.moveTo(90, 110);
    context.lineTo(110, 110);
    context.stroke();
}

botaoSim.addEventListener('click', () => {
    mensagem.textContent = 'Parabéns pela inscrição! Aguardamos você na aula de robótica.';
    mensagem.style.color = '#009933'; // Cor verde
    desenharRostoSorridente();
});

botaoNao.addEventListener('click', () => {
    const maxWidth = window.innerWidth - botaoNao.clientWidth;
    const maxHeight = window.innerHeight - botaoNao.clientHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    botaoNao.style.position = 'absolute';
    botaoNao.style.left = randomX + 'px';
    botaoNao.style.top = randomY + 'px';
    mensagem.textContent = ''; // Limpar a mensagem
    context.clearRect(0, 0, canvas.width, canvas.height); // Limpar o desenho
});
