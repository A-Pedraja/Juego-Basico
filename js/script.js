document.getElementById('player').addEventListener("click",sumarPuntos);

punto1= 0;
tiempo1= 60;
ned= 30;
function sumarPuntos(){
    punto1++;
    document.getElementById("punto1").innerHTML = "Puntos: <b>" +punto1 + "/" + ned + "</b>";
    randNum = Math.round(Math.random()*500);
    randNum2 = Math.round(Math.random()*500);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";

    if (punto1 == 30){
    alert("Ganaste");
    tiempo = 60;
    puntos = 0;
    }
}

function restarTiempo(){
tiempo1--;
 document.getElementById("tiempo1").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo1 + " ";
 if (tiempo == 0){
    alert("Perdiste");
    tiempo = 60;
    puntos = 0;
 }

}

setInterval(restarTiempo,1000);