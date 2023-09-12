'use strict'

//Localstorage

//comprobar si local storage existe
if(typeof(Storage) !== 'undefined'){
    console.log("LocalStrorage disponible");
}else{
    console.log("Incompatible con localStrorage  disponible");
}

//Guardar datos

localStorage.setItem("titulo", "Curso de Synfony de Victor Robles");

//Recuperar elemento



document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo"); // selecciono el div

//guardad objeto json al localstorage

var usuario = {
    nombre: 'Victor Robles',
    email: 'victorrobles@gmail.com',
    web: 'victorrobles.es'
}

localStorage.setItem('usuario', JSON.stringify(usuario));//convertimo a json string y guardamos

//Recuperar objeto de localstorage
//convierto un json string a json java script
 var userJS = JSON.parse(localStorage.getItem("usuario"));
 console.log(userJS);

 document.querySelector("#datos").append(userJS.web+ ' '+userJS.nombre);

 //localStorage.removeItem("usuario");//elimina al usuario de  localsorage
 localStorage.clear();//Limpia todo localstorage
