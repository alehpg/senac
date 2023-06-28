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
var velocidadeRaquete = 7

/* configurar a bola */
var BolaRdius = 10;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 2; /* direção da bola em X (esquerda/ direita) */
var bolaDY = -2; /* direção da bola em Y (acima/ abaixo) */

var setDireita = false;
var setEsquerda = false;

function reset(){
}

function l1(){
    velocidadeRaquete = 3;  
    bolaDX = 3
    bolaDY = -3
}
function le2(){
    velocidadeRaquete = 15;
    bolaDX = 5
    bolaDY = -5
}
function le3(){
    velocidadeRaquete = 20;
    bolaDX = 6
    bolaDY = -6
}
function le4(){
    velocidadeRaquete = 20;
    bolaDX = 7
    bolaDY = -7

}

/* movimentação da raquete - detecta descer e subir da tecla */
document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(tecla){
    /* se o valor = "direita || ou valor = "setaDireita" */
    if(tecla.key === "Right" || tecla.key === "ArrowRight" ) {
        setDireita = true /* Ativa variavel setaDireita */

        /* se o valor = "Esquerda || ou valor = "setaEsqeurda" */
    }else if (tecla.key === "Left" || tecla.key === "ArrowLeft" ) {
            setEsquerda = true /* Ativa a setaEsquerda */
    }
}

function subirDaTecla(tecla){
    if(tecla.key === "Right" || tecla.key === "ArrowRight" ) {
        setDireita = false /* Ativa variavel setaDireita */

        /* se o valor = "Esquerda || ou valor = "setaEsqeurda" */
    }else if (tecla.key === "Left" || tecla.key === "ArrowLeft" ) {
            setEsquerda = false /* Ativa a setaEsquerda */
        }
}

function desenharRaquete(){
    desenho.beginPath(); /* inicia o densenho  */
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "red"; 
    desenho.fill();
    desenho.closePath();
}


function desenharBola(){
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, BolaRdius, 0, Math.PI * 2);
    desenho.fillStyle = "blue";
    desenho.fill();
    desenho.closePath();
}

function desenhar(){
    desenho.clearRect(0, 0, canvas.width, canvas.height); /* limpa o frame anterior */
    desenharRaquete();
    desenharBola();

    /* analisar colisão eixo X, colisão canto direito/esquerdo */
if(bolaX + bolaDX > canvas.width - BolaRdius || bolaX + bolaDX < BolaRdius){
    bolaDX = -bolaDX;

}
/* analisa colisão com a parte de cimas */
if(bolaY + bolaDY < BolaRdius){
    bolaDY = -bolaDY;
}else if( bolaY + bolaDY > canvas.height - BolaRdius){

    if(bolaX > raqueteX && bolaX < raqueteX + raqueteLargura){
        bolaDY = -bolaDY /* inverte a direção  */
    }else {
        document.location.reload();/* renicia */
    }
}


    if(setDireita ===true && raqueteX < canvas.width - raqueteLargura){ 
        raqueteX = raqueteX + velocidadeRaquete;

    }else if(setEsquerda && raqueteX > 0){ 
        raqueteX = raqueteX - velocidadeRaquete;
    }



    bolaX = bolaX + bolaDX; /* faz a bola andar para direita/esquerda */
    bolaY = bolaY + bolaDY; /* essa faz a bola andar para cima/baixo */

    
 
    requestAnimationFrame(desenhar) /* atualizar tela de forma suave */
    

}
desenhar(); /* chama a função desenhar */



