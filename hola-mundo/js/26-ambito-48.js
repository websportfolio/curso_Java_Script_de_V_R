'use strict'


function holaMundo(texto){
    var hola_mundo = "Texto dentro de funcion"//variable local
    console.log(texto);
    console.log(typeof numero.toString()); //convertir un dato a un string
    console.log(hola_mundo);
}

var texto = "Hola mundo soy una variable global";
var numero = 12;

holaMundo(texto);
console.log(hola_mundo);//la variable local no se puede ver fuera de la funcion