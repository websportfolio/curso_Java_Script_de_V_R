'use strict';

/*
Hacer una calculadora
pedir 2 numeros y sacar con alert y consola todas las operaciones
*/

var numero1 = Number(prompt("Dame un primer numero"));
var numero2 = Number(prompt("Dame segundo numero"));

while(isNaN(numero1) || isNaN(numero2)){
    var numero1 = Number(prompt("Dame un primer numero"));
    var numero2 = Number(prompt("Dame segundo numero"));
}

var resultado = "resultado de suma =" +(numero1 + numero2)+" <br>"+
                "resultado de resta = "+(numero1 - numero2)+"<br>"+
                "resultado de multiplicar = "+(numero1 * numero2)+"<br>"+
                "resultado de dividir = "+(numero1 / numero2)+"<br>"

 var resultadoAlert = "resultado de suma =" +(numero1 + numero2)+" \n"+
                "resultado de resta = "+(numero1 - numero2)+"\n"+
                "resultado de multiplicar = "+(numero1 * numero2)+"\n"+
                "resultado de dividir = "+(numero1 / numero2)+"\n"

    

document.write(resultado);
alert(resultadoAlert)
console.log(resultadoAlert)
