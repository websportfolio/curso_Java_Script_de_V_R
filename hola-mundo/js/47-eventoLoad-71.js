'use strict'

window.addEventListener('load',function(){
    //inicio Load

            
        function cambiarColor(){
            console.log("Me has dado un click")
            var bg =  boton.style.background;
            if(bg == "green"){
                boton.style.background = "red";
            
            }else{
                boton.style.background="green";
            }

            boton.style.padding = "10px";
            boton.style.border = "1px solid #ccc";

        return true;
        
        }

        var boton = document.querySelector("#boton");
        //Evento click 
        boton.addEventListener('click', function(){
            cambiarColor();
          //Operador this solo dentro  
        console.log(this);
        this.style.border = "10px solid black"
        });

        //Mouseover

        boton.addEventListener('mouseover',function(){
            boton.style.background = "yellow";
        })
        //mouseout
        boton.addEventListener('mouseout',function(){
            boton.style.background = "#ccc";
        })

        //Focus
            var input = document.querySelector("#campo_nombre")
            input.addEventListener('focus',function(){  
                console.log("[focus] estas dentro de input");
            })
        //Blur

            input.addEventListener('blur',function(){  
                console.log("[blur] estas Fuera de input");
            })

        //Keydown

            input.addEventListener('keydown',function(event){  
                console.log("[keydown] Pulsando la tecla", String.fromCharCode(event.keyCode));//capturamos tecla y convertimos a letra
            });

        //Keypress

        input.addEventListener('keypress',function(event){  
            console.log("[keypress]  tecla precionada", String.fromCharCode(event.keyCode));//capturamos tecla y convertimos a letra
        });
        //Keyup

        input.addEventListener('keyup',function(event){  
            console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode));//capturamos tecla y convertimos a letra
        });

});//Fin de Load


