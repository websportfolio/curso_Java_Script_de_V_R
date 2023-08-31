'use strict';

/*
    hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/ 


var numero1 = parseInt(prompt("Ingresa numero 1", 0));
var numero2 = parseInt(prompt("Ingresa numero 2", 0));

document.write("<h1> De"+ numero1+ " hasta "+ numero2+ "</h1>")

for(var i = numero1; i<= numero2; i++){
    document.write(i+"<br>");
}