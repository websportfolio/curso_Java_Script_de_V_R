'use strict'

//Ejercicio 1

/*Programa pedir 2 numeros y q diga cual es el mayor menor y si son iguales*/

var numero1 = Number(prompt("Dime un numero", 0));
var numero2 = Number(prompt("dame segundo numero", 0))

console.log(numero1)


while(numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
    var numero1 = Number(prompt("Dime un numero", 0));
    var numero2 = Number(prompt("dame segundo numero", 0))
}

    
if (numero1>numero2){
    console.log(numero1+ " es mayor y  ")
    console.log(numero2+ " es menor y  ")    
}else if(numero2>numero1){
    console.log(numero2+ " es mayor y ")
    console.log(numero1+ " es menor y  ")
}else if(numero1 == numero2){
    console.log(numero1+" es igual al "+numero2)
}else{
    console.log("No son iguales")
}










