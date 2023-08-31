'use strict';

/*
    Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
    hasta introducir un numero negativo u ahi mostrar el resultado.
*/
var suma = 0;
var intentos = 0;
do{
    var numero1 = parseInt(prompt("Introduce primer numero", 0));
    if(isNaN(numero1)){
        numero1 = 0;
    }
    else if(numero1 >=0){
        suma = suma + numero1;
    }

    console.log("La suma es = "+suma);
    console.log("intentos = "+intentos);

    intentos++;
    
}

while( numero1  >= 0)

alert("La suma de todos los numeros es "+ suma);
alert("La media es = "+(suma / intentos));



