//funciones flecha


'use estrict';

//Funcion anonima
//es una funcion que no tiene nombre
/*
var pelicula = function(nombre){
    return ("La pelicula es : "+nombre);
}*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1+numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return(sumar);
}

sumame(1,2, dato =>{
    console.log("La suma es: "+dato);
}, dato =>{
    console.log("La suma por dos: "+(dato*2))
});