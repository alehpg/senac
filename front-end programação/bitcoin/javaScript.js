function buscar(){
    var seletor = document.getElementById('moeda').value;
    var resultado = document.getElementById('resultado');


    fetch('https://api.coingecko.com/api/v3/simple/price?ids='+seletor+'&vs_currencies=brl')       //buscar url
    .then(response => response.json())                                                         //espera receber arquivo json
    .then(data => {                                                                            //espera dado do arquivo json

        var preco = data[seletor].brl;
        resultado.textContent = formatar(preco);
        mudarImagem(seletor);

    }).catch(error => resultado.textContent = error);                                                           //imprime erro

}

function mudarImagem(seletor){
    var moeda = document.getElementById('imagem');

    if(seletor == "bitcoin"){
        moeda.innerHTML = '<img  src="https://cdn.dooca.store/250/products/83yyk34dn1ciccluxppyxyimjl67obk4yhdj_640x640+fill_ffffff.jpg?v=1583262891&webp=0">'
    }else if(seletor == "ethereum"){
        moeda.innerHTML = '<img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVm4V4vuj7QqOF5jFeFkC_9LqRb4TayuTNA9SQo5iJ6E2_J0ADHYyR5G-z0enZhJY7ik&usqp=CAU">'

    }else if(seletor == "litecoin"){
        moeda.innerHTML = '<img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCERIQnEGDY6XVAw3iGNCVobzwoak5TF5UQ&usqp=CAU">'

    }else if(seletor == "dogecoin"){
        moeda.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzs0FaHBALTN1QFP6nm4wr-A1ex1M6Ga4UQ&usqp=CAU">'
    }

    

}

function formatar(valor){
    //mascara para formatar valor
    valor = Number(valor).toFixed(2).replace('.',',');
    valor = "R$ "+valor;
    return valor;
}