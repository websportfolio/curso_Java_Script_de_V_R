var numero = 444;
var texto1 = "  Bienbenido al curso de java script curso de Victor Robles   ";
var texto2 = "Muy buen curso";

var buscar = texto1.replace("Victor Robles", "Ruslan Komarytskiy");//remplace una palabrapor otra
var buscar = texto1.slice(14); //corta palabras
var buscar = texto1.slice(14,22);//recorta palabras entre
var buscar = texto1.split(" ");//mete todo en un array y separa por un espacio
var buscar2 = texto1.trim();//quita espacion al principio y al final

console.log(buscar2);