function atualizar(){
    var data = new Date();/* para pegar a data e a hora */
    /* pega o que interessa */
    var hora = data.getHours();/* para pegar a hora  */
    var minuto = data.getMinutes();/* para pegar os minutos */
    var segundo  = data.getSeconds();/* para pegar segundos */

    hora = (hora < 10 ? "0" + hora : hora); /* colocar zero na frente da hora */
    minuto  = (minuto < 10 ? "0" + minuto : minuto);
    segundo = (segundo < 10 ? "0" + segundo : segundo);
    
    document.getElementById("hora").innerHTML = hora + ":" + minuto +":" + segundo;
}

setInterval(atualizar, 1000)



/* relogio analogico */
var hoursHand = document.querySelector(".hand.hours");
var minutesHand = document.querySelector(".hand.minutes");
var secondsHand = document.querySelector(".hand.seconds");

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

var setClock = () => {
  var currentDate = new Date();

  var secondsPercentage = currentDate.getSeconds() / 60;
  var minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
  var hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(hoursHand, hoursPercentage);
};

setClock();

setInterval(setClock, 1000);