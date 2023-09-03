'use estrict';

/*
Funciones
Es una agrupacion reutilizable de un conjunto de instrucciones
*/

//defino la funcion
//pasamos variable mostrar como flag
function calculadora(numero1, numero2, mostrar = false){
    //conjunto de instrucciones a ejecutar
   if(mostrar == false){

            console.log("Suma: "+(numero1+numero2));
            console.log("Resta: "+(numero1-numero2));
            console.log("Multiplicacion: "+(numero1*numero2));
            console.log("Divicion: "+(numero1/numero2));
            console.log("****************************");
        
            console.log(mostrar);


   }else{

            document.write("Suma: "+(numero1+numero2)+"<br>");
            document.write("Resta: "+(numero1-numero2)+"<br>");
            document.write("Multiplicacion: "+(numero1*numero2)+"<br>");
            document.write("Divicion: "+(numero1/numero2)+"<br>");
            document.write("****************************"+"<br>");
        
            console.log(mostrar);

   }
   

  // return("Hola soy la calculadora invisible");
}


calculadora(1, 2, true+"</br>");
