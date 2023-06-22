function baixarEstouque(){
    alert("Baixou Estoque!")
}

function movimentarCaixa(){
    alert("Caixa movimentado")
}

function fazerVenda(){
    baixarEstouque();
    movimentarCaixa();
    

    let titulo = document.getElementById('Texto');
    titulo.innerHTML="Novo Texto";
}

//imanina um botão na tela que chama o fazer venda 

//dom Object documente

var pessoa = {idade:10, nome:'Ricardo'};
alert(pessoa.nome);