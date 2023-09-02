'use estrict';

/*
Funciones
Es una agrupacion reutilizable de un conjunto de instrucciones
*/

//defino la funcion
function calculadora(numero1, numero2){
    //conjunto de instrucciones a ejecutar
   
   console.log("Suma: "+(numero1+numero2));
   console.log("Resta: "+(numero1-numero2));
   console.log("Multiplicacion: "+(numero1*numero2));
   console.log("Divicion: "+(numero1/numero2));
   console.log("****************************");

  // return("Hola soy la calculadora invisible");
}

calculadora(12, 8);
calculadora(98, 2);
var contador=0;
for(var i=1; i<10; i++){
    calculadora(i, 8);
    console.log(i);
}
