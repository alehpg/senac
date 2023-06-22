 function buscar() {
    var cep = document.getElementById('cep').value;
    var url = 'https://viacep.com.br/ws/'+cep+'/json/'; 

    fetch(url) 
    .then(Response => Response.json())
    .then(data => {
       //alert('funcionou')

        if(data.erro){
            document.getElementById('res').textContent = 'CEP não encotrado!'

        }else{
            document.getElementById('res').innerHTML = 
            '<strong> Cidade:</strong> '+data.localidade+ '<br>';
            +'<strong>Cidade: </strong>'+ data.localidade+'<br>'
            +'<strong>CEP: </strong>'+ data.cep+'<br>'
            +'<strong>Logradouro: </strong>'+ data.logradouro+'<br>'
            +'<strong>Bairro: </strong>'+ data.bairro+'<br>'
            +'<strong>complemento: </strong>'+ data.complemento+'<br>'
            +'<strong>Estado: </strong>'+ data.estado+'<br>'
            +'<strong>Codigo IBG: </strong>'+ data.ibg+'<br>'
        }


    }).catch(error => alert('deu errado:'+ error));
}