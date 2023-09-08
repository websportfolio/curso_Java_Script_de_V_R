'use strict';

//Arrays multidimencionales

var categorias =  ['Accion','terror','Comedia'];
var peliculas = ['La verdad duele','La vida es bella','Gran Torino'];
var cine = [categorias, peliculas];
//console.log(cine[1][2]);

//añadir un elemento de array de pelicula
//peliculas.push = "Batman";

//console.log(peliculas);
/*
var elemento = "";

do{
    var elemento = prompt("Introduce un elemento de pelicula");
    peliculas.push(elemento);
}

while(elemento != "ACABAR")
//ELIMINAR ULTIMO ELEMENTO DEL ARRAY
peliculas.pop();
console.log(peliculas);
*/

var indice = peliculas.indexOf('Gran Torino');
console.log(indice);
console.log(peliculas);
//eliminar elemento de un array
if(indice >-1){
    peliculas.splice(indice, 1);
}
var peliculas_string = peliculas.join();
console.log(peliculas_string);