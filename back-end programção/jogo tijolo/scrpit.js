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

/* configura tijolos */
var tijoPorLinha = 3;
var tijoPorColuna = 6;
var tijoloAltura = 20;
var tijoloLargura = 75;
var tijoloEspacamento = 10;
var espacamentoSupQuadro = 30;
var espacamentoEsquerdoQuadro = 30;
var tijolos = []; /* lista com os tijolos */

/* dedicado apena a inicializção dos tijolos */
for(var coluna = 0; coluna < tijoPorColuna; coluna++ ){
    tijolos[coluna] = []; /* 0 1 2 3 4 5 */

    for(var linha = 0; linha < tijoPorLinha; linha++ ){
        tijolos[coluna][linha] = {x:0, y:0, ativo:1}
        /* x é posição eaquerda / direita no canva */
        /*  y é a posição acima / abaixo do canvas */
        /* ativo, determina se o tijolo aparece ou não, 1 ou 0 */

    }

}


var setDireita = false;
var setEsquerda = false;


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

function desenharTijolos(){
    for(var coluna = 0; coluna < tijoPorColuna; coluna++){
        for(var linha = 0; linha < tijoPorLinha; linha++){
        
            if(tijolos[coluna][linha].ativo == 1){ /* verificar se tijolo esta ativo para desenha-lo */

            var tijoloX = (coluna * (tijoloLargura + tijoloEspacamento)+ espacamentoSupQuadro);
            var tijoloY = (linha * (tijoloAltura + tijoloEspacamento)+ espacamentoSupQuadro);

            tijolos[coluna][linha].x = tijoloX;
            tijolos[coluna][linha].y = tijoloY;

            desenho.beginPath();
            desenho.rect(tijoloX, tijoloY, tijoloLargura,tijoloAltura);
            desenho.fillStyle = "black";
            desenho.fill();
            desenho.closePath();


            }

        }
    }
}

function desenhar(){
    desenho.clearRect(0, 0, canvas.width, canvas.height); /* limpa o frame anterior */
    desenharRaquete();
    desenharBola();
    desenharTijolos();


/* inicio da função colisão */

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
        document.location.reload(); /* renicia */
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



