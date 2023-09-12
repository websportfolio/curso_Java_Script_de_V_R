'use strict'

window.addEventListener('load',function(){

    //creo funcion intervalo para llamar desde cualquier parte del codigo




    function intervalo(){

        
    //Timers
    //se ejecuta cada vez [setInterval]
    var tiempo = setInterval(function(){
        //setTimeout se ejecuta una vez solo
       // var tiempo = this.setTimeout(function(){
        console.log("SetInterval ejecutandose!!!");

        var encabezado = document.querySelector("h1"); 

        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "20px";
        }else{
            encabezado.style.fontSize = "50px";
        }

        
    }, 1000);//cada 3 seg se va ejecutar el codigo
        return tiempo;
    }

    var tiempo2 = intervalo();


var stop = document.querySelector("#stop");

stop.addEventListener('click',function(){
    alert("Has parado!!!");
    clearInterval(tiempo2);
});
//selecciono id
var start = document.querySelector("#start");
//ejecuto evento
    start.addEventListener('click', function(){
        alert("Has empezado intervalo en boocle!!!")
        intervalo();//llamamos a funcion para empezar el boocle
    
    });

});