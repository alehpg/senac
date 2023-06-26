var lista = document.querySelectorAll('.lista');
function ativaLink(){
    for(let i of lista){
        i.classList.remove('ativo');
    }
    this.classList.add('ativo');
}
for(let i of lista){
    i.addEventListener('click', ativaLink);
}
/* fim da nav */

/* inicio do jogo */
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

/* configura raquete */
var raqueteAltura = 10;
var raqueteLargura = 70;
var raqueteX  = (canvas.width - raqueteLargura) / 2; /* centralizar a raquete */

/* configurar a bola */
var BolaRdius = 10;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 2; /* direção da bola em X (esquerda/ direita) */
var bolaDY = -2; /* direção da bola em Y (acima/ abaixo) */

var setDireita = false;
var setEsquerda = false;

function desenharRaquete(){
    desenho.beginPath(); /* inicia o densenho  */
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "blue"; 
    desenho.fill();
    desenho.closePath();
}

function desenhar(){
    desenho.clearRect(0, 0, canvas.width, canvas.height); /* limpa o frame anterior */
    desenharRaquete();

    requestAnimationFrame(desenhar) /* atualizar tela de forma suave */
    

}
desenhar(); /* chama a função desenhar */

