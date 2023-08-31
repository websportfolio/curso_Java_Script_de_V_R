'use estrict';

console.log("ej 15")
/*
Mostrar todos numeros divisores entre dos num introducidos
*/
var resultado = parseInt(prompt("Ingrese un numero",0));
console.log(resultado)

var i = 1;
while(i<= resultado){

    
if((resultado % i) == 0){
    
    
    console.log("Divisor = "+ i);
    
    }


i++;
}