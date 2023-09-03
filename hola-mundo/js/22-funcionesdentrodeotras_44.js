'use estrict';

/*
Funciones
Es una agrupacion reutilizable de un conjunto de instrucciones
*/

function porConsola(numero1, numero2){
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Divicion: "+(numero1/numero2));
    console.log("****************************");
}

function porPantalla(numero1,numero2){
             document.write("Suma: "+(numero1+numero2)+"<br>");
            document.write("Resta: "+(numero1-numero2)+"<br>");
            document.write("Multiplicacion: "+(numero1*numero2)+"<br>");
            document.write("Divicion: "+(numero1/numero2)+"<br>");
            document.write("****************************"+"<br>");
}



function calculadora(numero1, numero2, mostrar = false){
    //conjunto de instrucciones a ejecutar
   if(mostrar == false){
        porConsola(numero1, numero2);
   }else{
        porPantalla(numero1,numero2);
   }
   return(true);
}

calculadora(2,2);
calculadora(1, 2, true);
calculadora(3, 3, true);