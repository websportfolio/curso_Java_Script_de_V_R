'use estrict';

//buscar en un array

var lenguajes = new Array("PHP", "JS", "Go","Java","C#","C","Pascal");

document.write("<h1>Todos los lenguajes de 2023</h1>");

document.write("<ul>")

for (let lenguaje in lenguajes){
document.write("<li>"+lenguajes[lenguaje]+"</li>")
}
document.write("</ul>")
/*
var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP"
    
})
*/


var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP")
//buscar el indice
var busqueda2 = lenguajes.findIndex(lenguaje => lenguaje == "PHP")

console.log(busqueda);
console.log(busqueda2)

//hacer un filtro buscando valores mayores o menores (some)

var precio = [10, 20, 30, 80, 50];

var busPrecios = precio.some(precio => precio < 10);

console.log("Precios "+busPrecios);