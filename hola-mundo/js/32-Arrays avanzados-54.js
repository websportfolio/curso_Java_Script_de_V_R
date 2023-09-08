'use strict'

//Arrays, Arreglos, Matrizes basicos

var nombres = ["Ruslan Komarytskiy","Victor Robles","Juan Perez","Ignacio Gonzales", 52, true];
var lenguajes = new Array("PHP", "JS", "Go","Java","C#","C","Pascal");

//console.log(nombres);
//console.log(lenguajes);

//console.log(nombres.length);
/*
var elemento =  parseInt( prompt("Que elemento de array quieres? ", 0));

if(elemento >= nombres.length|| elemento < 0){
    alert("Ingrese numero no mas de  "+nombres.length)
    
}else{
    alert(nombres[elemento]);
}

*/

//mostrar todo el documento de array por pantalla

document.write("<h1>Todos los lenguajes de 2023</h1>");

document.write("<ul>")
for(var i = 0; i<lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");