document.getElementById('player').addEventListener("click",sumarPuntos);

punto1= 0;
tiempo1= 60;
ned= 30;
function sumarPuntos(){
    punto1++;
    document.getElementById("punto1").innerHTML = "Puntos: " +punto1 + "/" + ned;
    randNum = Math.round(Math.random()*500);
    randNum2 = Math.round(Math.random()*500);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";

    if (punto1 == 30){
    alert("Ganaste");
    tiempo1 = 60;
    punto1 = 0;
    }
}

function restarTiempo(){
tiempo1--;
 document.getElementById("tiempo1").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo1 + " ";
 if (tiempo1 == 0){
    alert("Perdiste");
    tiempo1 = 60;
    punto1 = 0;
 }

}

setInterval(restarTiempo,1000);