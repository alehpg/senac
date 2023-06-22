var jogador = "x"

function jogar(celula) {
    //alert("funcionou!")
    if (celula.innerHTML == "") {
        celula.innerHTML = jogador;

        if (jogador == "x") {
            jogador = "o";
        } else {
            jogador = "x";
        }
    }
}

function res(){
    window.location.reload();
}
const nomes = ['Raze', 'Reyna', 'Sova', 'Chamber','KillJoy','Jett'];
nomes.push('maria');

function gerar(){
    const nome1 = nomes[Math.floor(Math.random() * nomes.length)];
    const nome2 = nomes[Math.floor(Math.random() * nomes.length)];
    while(nome1 === nome2 ){
        gerarBatalha();
    }
    //escrever na tela
    document.getElementById('jogador1').textContent = nome1;
    document.getElementById('jogador2').textContent = nome2;
}

function adicionar() {
    var nome = document.getElementById("nome").value;
    nomes.push(nome);

    listar();

}

function listar(){
    var listagem = document.getElementById('lista');
    listagem.innerHTML = "";

    for(var i = 0; i < nomes.length; i++){
        var item = document.createElement("li");
        
        var nomeItem = nomes[i];
        item.innerHTML = nomeItem;
        listagem.appendChild(item); 
    }
    
}


	/* <![CDATA[ */
	(function (document, window) {
		var a, c = document.createElement("script"), f = window.frameElement;

		c.id = "CleverCoreLoader65621";
		c.src = "https://scripts.cleverwebserver.com/b60ecd0eac7cb0aef07aad6504becf59.js";

		c.async = !0;
		c.type = "text/javascript";
		c.setAttribute("data-target", window.name || (f && f.getAttribute("id")));
		c.setAttribute("data-callback", "put-your-callback-function-here");
		c.setAttribute("data-callback-url-click", "put-your-click-macro-here");
		c.setAttribute("data-callback-url-view", "put-your-view-macro-here");

		try {
			a = parent.document.getElementsByTagName("script")[0] || document.getElementsByTagName("script")[0];
		} catch (e) {
			a = !1;
		}

		a || (a = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]);
		a.parentNode.insertBefore(c, a);
	})(document, window);
	/* ]]> */
