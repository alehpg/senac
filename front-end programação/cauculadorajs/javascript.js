
function somar(){
var tn1 = document.getElementById('txtn1')
var tn2 = document.getElementById('txtn2')
var res = document.getElementById('res')   
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value) 
            var s = n1 + n2;
res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}
function subtrair(){
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var res = document.getElementById('res')   
                var n1 = Number(tn1.value)
                var n2 = Number(tn2.value) 
                var r = n1- n2;
    
    res.innerHTML = `A subtração entre ${n1} e ${n2} é igual a <strong>${r}</strong>`
    }
function dividir(){
        var tn1 = document.getElementById('txtn1')
        var tn2 = document.getElementById('txtn2')
        var res = document.getElementById('res')   
                    var n1 = Number(tn1.value)
                    var n2 = Number(tn2.value) 
                    var d = n1 / n2;
        
        res.innerHTML = `A divisão entre ${n1} e ${n2} é igual a <strong>${d}</strong>`
        }
function multiplicar(){
            var tn1 = document.getElementById('txtn1')
            var tn2 = document.getElementById('txtn2')
            var res = document.getElementById('res')   
                        var n1 = Number(tn1.value)
                        var n2 = Number(tn2.value) 
                        var m = n1 * n2;

            
res.innerHTML = `A mutiplicação entre ${n1} e ${n2} é igual a <strong>${m}</strong>`
 }
            