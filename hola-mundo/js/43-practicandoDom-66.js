'use strict'

//DOM Document Object Model

function cambiarColor(color){
    caja.style.background= color;
}
//conseguir elementos con id concreto

//var caja = document.getElementById("miCaja"); //capturar el codigo html

var caja = document.querySelector("#miCaja");

caja.innerHTML= "TEXTO DE LA CAJA DESDE JS!!!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color="white"
caja.className = "hola hola2";


//conseguir elementos por su etiqueta
var todosDiv = document.getElementsByTagName("div");
console.log(todosDiv);

/*
//var contenidoTexto = todosDiv[2].textContent;
var contenidoTexto = todosDiv[2];
contenidoTexto.innerHTML = "Otro texto para segundo div"
contenidoTexto.style.background="Green";
console.log(contenidoTexto)
*/
//Recorrer todos los divs que hay
//todosDiv.forEach((valor, indice) => {
    var seccion = document.querySelector("#miseccion");
    var hr = document.createElement("hr");
    
    var valor;
    for(valor in todosDiv){
        
console.log(todosDiv[valor]);

        if( typeof todosDiv[valor].textContent == "string"){
                        
            var parrafo =   document.createElement("p");
            var texto =  document.createTextNode(todosDiv[valor].textContent);
            parrafo.append(texto);//añade despues
            //
            seccion.append(parrafo);
        }

    }
//});
seccion.append(hr);
////conseguir elementos por su clase css

console.log(caja);

//conseguir elementos por su clase css

var divRojo = document.getElementsByClassName("rojo");
var divAmarillo = document.getElementsByClassName("amarillo");
console.log(divAmarillo);
divAmarillo[0].style.background = "yellow";

for(var div in divRojo){

    if(divRojo[div].className == "rojo"){
        divRojo[div].style.background = "red";
    }
    
}


//console.log(divRojo);

//Query selector

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);

var buscar = document.querySelectorAll("p");
console.log(buscar[4]);