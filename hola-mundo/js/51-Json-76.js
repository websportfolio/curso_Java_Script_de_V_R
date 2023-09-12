'use strict';


window.addEventListener('load', function(){

        //JSON-> Java Script Object Notation

var pelicula = {
    titulo: "Batman vs Superman",
    año: "2017",
    pais:"Estados Unidos"
}
pelicula.titulo = "Superman Begins";
//console.log(pelicula.titulo);

var peliculas = [
    {titulo: "La verdad duele", año: "2016", pais: "Francia"},
    pelicula
]

console.log(peliculas);

var caja_peliculas = document.querySelector("#peliculas");//selecciono id de div
var index;
for(index in peliculas){
    var p = document.createElement("p");//selecciono el parrafo
    p.append(peliculas[index].titulo+" - "+peliculas[index].año);//accedo al titulo y año
    caja_peliculas.append(p);//mostrar en pagina
}



});

