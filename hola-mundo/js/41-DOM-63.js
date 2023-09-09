'use estrict'

//DOM Document Object Model

function cambiarColor(color){
    caja.style.background= color;
}


//var caja = document.getElementById("miCaja"); //capturar el codigo html

var caja = document.querySelector("#miCaja");

caja.innerHTML= "TEXTO DE LA CAJA DESDE JS!!!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color="white"
caja.className = "hola hola2";

console.log(caja);

