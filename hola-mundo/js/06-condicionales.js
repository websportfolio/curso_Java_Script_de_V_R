'use strict'

//Condicionales IF

//Si a = a B entonces haz esto

var edad = 19;
var nombre= "David Suarez";

//Operadores relacionales
/*
    mayor >
    menor <
    mayor o igual >=
    menor o igual <=
    igual ==
    distinto !=
*/ 
if(edad >= 18){
    //Es mayor de edad
    console.log(nombre+ ' '+'tiene '+edad+' años, es mayor de edad')

    if(edad <= 33){
        console.log("Todavia eres millenial")
    }else if(edad>= 70){
        console.log("Eres ansiano")
    }else{
        console.log("Ya no eres millenial")
    }

}else{
    console.log(nombre+ ' '+'tiene '+edad+' años, es menor de edad')
}


/*
//Operadores logicos
AND : &&
OR : ||
Negacion : !
*/ 
//Negacion

var year = 2004;
if(year != 2016){
    console.log("El año no es : 2016 es "+ year)
}

//AND

if(year >= 2000 && year <= 2020 && year != 2018){
    console.log("Estamos en la era actual")
}else{
    console.log("Estamos en la era posmoderna");
}

//OR

if(year == 2008 || (year >= 2018 && year == 2018)){
    console.log("El año acaba en 8")
}else{
    console.log("Año no registrado")
}
