'use strict';

/*
  Tabla de multiplicar de un numero introducido por pantalla
*/

//var numero = Number(prompt("Introduce numero de tabla de multiplicar"));
//document.write("<h1> Tabla de numero "+  numero +  " </h1>");

for(var b = 1; b<10; b++){
    document.write("<h1> Tabla de numero "+  b +  " </h1>");
    for( var i=1; i<10; i++){
        document.write( b+ " x "+i +" = "+ (b * i)+"</br>");
    }
    document.write("<br>")
}

