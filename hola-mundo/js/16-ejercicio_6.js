'use estrict';

/*
    Que nos diga si el numero es par o impar
    1. pedir numero
    2. Si no es valido q vuelva a pedir
*/

var numero = parseInt( prompt("dame un numero",0));
while(isNaN(numero)){
    var numero = parseInt( prompt("dame un numero",0));
}
if((numero % 2) == 0){
    console.log(numero +" Es par")
}else{
    console.log(numero+ " es impar")
}



