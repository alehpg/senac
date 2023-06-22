var frase = "Mãe, minha rainha absoluta, você é a maior inspiração pra minha vida. Não consigo expressar em palavras a gratidão que tenho por tudo que fez e faz por mim. Te amo muito! Feliz Dia das Mães! ";

function gerarFrase(){
    var texte = document.getElementById('frase');
    texte.innerHTML = frase;
}

function lerFrase(){
    var som = window.speechSynthesis;
    var discurso = new SpeechSynthesisUtterance(frase);
    som.speak(discurso)
}