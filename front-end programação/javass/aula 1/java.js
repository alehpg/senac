var numero = 17; 

if(numero > 10 ){
    alert('numero maior que 10');
}else if (numero < 0 ){
    alert('numero invalido')
    
}else{
    alert('numero menor que 10');
}

var contador = 0;
// enquanto contador for menor que 5 executa

while(contador < 0){
    alert('Numero:' + contador);
    contador = contador + 1;
}
//criação de lista 

var nomes = ['Fulano','Ciclano','Deltrano'];
//alert(nomes[2])
for(contador=0; contador < nomes.length; contador++){
    alert(nomes[contador]);

    if(nomes[contador] === 'Ciclano'){
        alert('Pessoa encontrada!')
    }
} 
