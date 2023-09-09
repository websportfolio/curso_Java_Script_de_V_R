'use estrict';


/*
    Hacer un programa

    1. Pida 6 numeros y los meta en un array

    2. Mostrar el array entero(todos los elementos) en la pagina y console

    3. Ordenarlo y mostrarlo

    4.Invertir su orden y mostrarlo

    5.Mostrar cuantos elementos tiene el array

    6.Busqueda de valor introducido decir si esta y su indice en array

*/

//1. Pida 6 numeros y los meta en un array


function mostrarArray(elementos, textoCustom= ""){
    //Mostrar en el cuerpo de la pagina
    document.write("<h1> Contenido del array"+textoCustom+"</h1>")
    document.write("<ul>")
    elementos.forEach((elemento,index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>")
}

var contador =0;
//var arraynumeros = Array(6);

//Pedir 6 numeros
var arraynumeros = [];

    for(var i = 0; i<=5; i++){
        
    //arraynumeros[i] = parseInt( prompt("Ingrese un numero"));
    arraynumeros.push(parseInt( prompt("Ingrese un numero")));

    }

    //Mostar el cuerpo de la pagina

    mostrarArray(arraynumeros);
    

    


//Mostrar arrra consola
console.log(arraynumeros)

    //3.Ordenar y mostrar
     arraynumeros.sort(function(a,b){return a-b});
    //console.log("ordenado "+ arraynumeros)
    mostrarArray(arraynumeros,"Ordenado ")
    //4.invertir su orden y mostrarlo
    arraynumeros.reverse();
    mostrarArray(arraynumeros, "Revertido ")
   // 5. cuantos elementos tiene un array 
   
   console.log(arraynumeros.length+" elementos")

   //6 Busqueda de usuario

   var busquedaUser = parseInt(prompt("Introduce numero"));

    var posicion = arraynumeros.findIndex(numero => numero == busquedaUser);

    if(posicion && posicion != -1){
        document.write("</hr><H1>ENCONTRADO <H1>")
        document.write("<h1>Posicion de la busqueda: "+ posicion+"</h1></hr>");
    }else{
        document.write("<H1>NO lo HA ENCONTRADO <H1>")
    }

    

