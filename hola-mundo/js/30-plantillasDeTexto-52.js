'use strict'

//plantillas de texto

var nombre = prompt("METE TUS NOMBRES");
var apellido = prompt("METE TUS APELLIDOS");

//var texto = "Tu nombre es "+nombre+ " Tu apellido es "+apellido;

var plantilla =  `

<h1> Hola que tal</h1>
<h2> Mi nombre es: ${nombre}</h2>
<h2>Mi apellido es: ${apellido}</h2>
`;

document.write(plantilla);