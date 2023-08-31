'use estrict';

/**
 * Mostrar todo los numeros impares que hay entre dos numeros introducidos
 * 
 */






var num1 = Number(prompt("Ingrese numero 1",0));
var num2 = Number(prompt("Ingrese numero 2",0));


for(var i = num1; i< num2; i++){

    var resultado = i %  2;
if((resultado)!=0){
console.log(i+" es impar")
}else if(resultado == 0){
   // console.log(i+" es par")
}

}