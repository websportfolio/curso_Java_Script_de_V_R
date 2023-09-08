'use strict';

//Funciones texto

var numero = 444;
var texto1 = "Bienbenido al curso de java script curso de Victor Robles";
var texto2 = "Muy buen curso";

var busqueda = texto1.indexOf("curso");
var busqueda2 = texto1.lastIndexOf("curso");
var busqueda3 = texto1.search("cursoss");
var busqueda4 = texto1.match(/curso/g);//devuelve un array
var busqueda5 = texto1.substr(14,5);
var busqueda6 = texto1.charAt(44);//saca una letra en concreto
var busqueda7 = texto1.startsWith("Bi");//devuelve true o falce busca al inicio 
var busqueda8 = texto1.endsWith("Victor Robles");//devuelve true o falce busca al final
var busqueda9 = texto1.includes("java script2");
console.log(busqueda9);