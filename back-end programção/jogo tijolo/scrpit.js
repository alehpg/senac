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
var tijoloPorLinha = 3;
var tijoloPorColuna = 6;
var tijoloAltura = 20;
var tijoloLargura = 75;
var tijoloEspacamento = 10;
var espacamentoSupQuadro = 30;
var espacamentoEsquerdoQuadro = 30;
var tijolos = []; /* lista com os tijolos */

/* pontuação  */
var totalPontuacao = tijoloPorLinha * tijoloPorColuna * 100;
var pontuacao = 0;




/* dedicado apena a inicializção dos tijolos */
for(var coluna = 0; coluna < tijoloPorColuna; coluna++ ){
    tijolos[coluna] = []; /* 0 1 2 3 4 5 */

    for(var linha = 0; linha < tijoloPorLinha; linha++ ){
        tijolos[coluna][linha] = {x:0, y:0, ativo:1}
        /* x é posição eaquerda / direita no canva */
        /*  y é a posição acima / abaixo do canvas */
        /* ativo, determina se o tijolo aparece ou não, 1 ou 0 */

    }

}


var setDireita = false;
var setEsquerda = false;

function modoImpossivel(){
    
}

function reset(){
    document.location.reload();
}
function facil(){
    raqueteLargura = 90;
    tijoloPorLinha = 3;
    tijoloPorColuna = 8;
    tijoloLargura = 50;
    tijoloAltura = 30;
    bolaDX = 5;
    bolaDY = -5;
    bolaX = canvas.width/ 2;
    bolaY = canvas.height -30;
    totalPontuacao = tijoloPorLinha * tijoloPorColuna *100;
    iniciarTijolos();
    
}
function medio(){
    raqueteLargura = 80;
    tijoloPorLinha = 5;
    tijoloPorColuna = 9;
    tijoloLargura = 50;
    tijoloAltura = 15;
    bolaDX = 2; 
    bolaDY = -3;
    BolaRdius = 7;
    bolaX = canvas.width/ 2;
    bolaY = canvas.height -30;
    velocidadeRaquete = 10
    pontuacao = 0
    totalPontuacao = tijoloPorLinha * tijoloPorColuna *100;
    iniciarTijolos();
}
function dificil(){
    raqueteLargura = 80;
    tijoloPorLinha = 6;
    tijoloPorColuna = 11;
    tijoloLargura = 40;
    tijoloAltura = 10;
    BolaRdius = 7;
    bolaDX = 9;
    bolaDY = -9;
    bolaX = canvas.width/ 2;
    bolaY = canvas.height -30;
    velocidadeRaquete = 15;
    totalPontuacao = tijoloPorLinha * tijoloPorColuna *100;
    pontuacao = 0
    iniciarTijolos();
}
function impossivel(){
    raqueteLargura = 80;
    tijoloPorLinha = 14;
    tijoloPorColuna = 22;
    tijoloLargura = 20;
    tijoloAltura = 5;
    bolaDX = 1;
    bolaDY = -3;
    BolaRdius = 5;
    bolaX = canvas.width/ 2;
    bolaY = canvas.height -30;
    velocidadeRaquete = 20;
    totalPontuacao = tijoloPorLinha * tijoloPorColuna *100;
    pontuacao = 0
    iniciarTijolos();
}

function iniciarTijolos(){
    for (var coluna = 0; coluna < tijoloPorColuna; coluna++){
    tijolos[coluna] = []
    for (var linha = 0; linha < tijoloPorLinha; linha++){
        tijolos[coluna][linha] = {x:5, y:5, ativo:1 }

        }
   
    }
}
iniciarTijolos();



/* movimentação da raquete - detecta descer e subir da tecla */
document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(tecla){
    /* se o valor = "direita || ou valor = "setaDireita" */
    if(tecla.key === "d" || tecla.key === "ArrowRight" ) {
        setDireita = true /* Ativa variavel setaDireita */

        /* se o valor = "Esquerda || ou valor = "setaEsqeurda" */
    }else if (tecla.key === "a" || tecla.key === "ArrowLeft" ) {
            setEsquerda = true /* Ativa a setaEsquerda */
    }
}

function subirDaTecla(tecla){
    if(tecla.key === "d" || tecla.key === "ArrowRight" ) {
        setDireita = false /* Ativa variavel setaDireita */

        /* se o valor = "Esquerda || ou valor = "setaEsqeurda" */
    }else if (tecla.key === "a" || tecla.key === "ArrowLeft" ) {
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


function gerarEfeitoSonoro(som){
    /* criar contexto de audio */
    var contexto = new (window.AudioContext)();
    /* fazer uma requesição para carregar o arquivo de som */
    var requesicao = new XMLHttpRequest();
    requesicao.open('GET',som,true);
    requesicao.responseType = 'arraybuffer'; /* armazenar na memoria */

    requesicao.onload = function(){
        /* decoficar o arquivo de som */
        contexto.decodeAudioData(requesicao.response, function(buffer){
            /* reprodução do som no navegador */
            var fonte = contexto.createBufferSource();
            fonte.buffer = buffer;
            /* conecta a saida de som  */
            fonte.connect(contexto.destination);
            fonte.start(0); /* executa som */
        });
    }
    requesicao.send();
}

function desenharTijolos(){
    for(var coluna = 0; coluna < tijoloPorColuna; coluna++){
        for(var linha = 0; linha < tijoloPorLinha; linha++){
        
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


function detectaColisão() {
    for( var coluna = 0; coluna < tijoloPorColuna; coluna++){
        for(var linha = 0; linha < tijoloPorLinha; linha++){
            var tijolo = tijolos [coluna][linha];
            
            if(tijolo.ativo === 1 ){
                if(bolaX + BolaRdius  > tijolo.x
                     && bolaX - BolaRdius  < tijolo.x + tijoloLargura 
                     && bolaY + BolaRdius  > tijolo.y 
                     && bolaY - BolaRdius  < tijolo.y + tijoloAltura ){
                        bolaDY = -bolaDY;
                        tijolo.ativo = 0;

                        tela = document.getElementById("ponto");
                        pontuacao = pontuacao +100;
                        tela.innerHTML = "Score: " + pontuacao;
                        gerarEfeitoSonoro('moeda.mp3');

                        /* if(modoImpossivel === true1){
                            bolaDY = bolaDY;
                        } */
                        
                        if(pontuacao === totalPontuacao){
                            var win = document.getElementById("telaWin")
                            win.style.display = "block"
                            gerarEfeitoSonoro('win.mp3')
                        }

                }
            }
        }
    }
}

function gameover() {
    var gameOver = document.getElementById("gameover")
    gameOver.style.display = "block";
}

function reniciar(){
    document.location.reload();

}
function gameover(){
    var menssagem = document.getElementById("gameover");
    menssagem.style.display="block";
    gerarEfeitoSonoro('over.mp3');
    bolaDX= 0;
    bolaDY=0;
}


function desenhar(){
    desenho.clearRect(0, 0, canvas.width, canvas.height); /* limpa o frame anterior */
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectaColisão();


/* inicio da função colisão */

    /* analisar colisão eixo X, colisão canto direito/esquerdo */
if(bolaX + bolaDX > canvas.width - BolaRdius || bolaX + bolaDX < BolaRdius){
    bolaDX = -bolaDX;

}
/* analisa colisão com a parte de cimas */
if(bolaY + bolaDY < BolaRdius){
    bolaDY = -bolaDY;
}else if( bolaY + bolaDY > canvas.height - BolaRdius -raqueteAltura){

    /* se for maior que o começo da raquete e menor que o final da raquete */
    if(bolaX > raqueteX && bolaX  < raqueteX + raqueteLargura){
        bolaDY = -bolaDY /* inverte a direção  */
    }else {
        gameover();
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



