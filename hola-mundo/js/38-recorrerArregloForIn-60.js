'use estrict'

//reorrer arreglo con for in

//var nombres = ["Ruslan Komarytskiy","Victor Robles","Juan Perez","Ignacio Gonzales", 52, true];
var lenguajes = new Array("PHP", "JS", "Go","Java","C#","C","Pascal");

document.write("<h1>Todos los lenguajes de 2023</h1>");

document.write("<ul>")

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>")