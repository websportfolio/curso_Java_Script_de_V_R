'use strict';

//Eventos del raton



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
