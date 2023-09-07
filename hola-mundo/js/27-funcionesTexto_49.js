'use strict';

//Funciones texto

var numero = 444;
var texto1 = "Bienbenido al curso de java script de Victor Robles";
var texto2 = "Muy buen curso";

//como transformar un numero a un String

var dato = numero.toString();
dato = texto2.toLocaleUpperCase();//transforma a mayusculas
dato = texto1.toLowerCase();//transforma a minusculas
console.log(typeof dato);
console.log(dato)

//calcular longitud

var nombre = "Ruslan";
nombre = ["hola", "mundo"];

console.log(nombre.length);

//Concatenar unir textos

//var textoTotal = texto1 + texto2;
var textoTotal = texto1.concat(" "+texto2);

console.log(textoTotal);

