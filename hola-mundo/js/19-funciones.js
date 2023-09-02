'use estrict';

/*
Funciones
Es una agrupacion reutilizable de un conjunto de instrucciones
*/

//defino la funcion
function calculadora(){
    //conjunto de instrucciones a ejecutar
   
   console.log("Hola soy la calculadora");
   console.log("Si soy yo");

   return("Hola soy la calculadora invisible");
}

//console.log(calculadora(),calculadora(), calculadora());
//Inbocar o llamar
//calculadora();
//calculadora();
//calculadora();

var resultado = calculadora();
console.log(resultado);

