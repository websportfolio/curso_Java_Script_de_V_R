'use strict'

//



    
var formulario = document.querySelector("#form_peliculas");

formulario.addEventListener('submit',function(){
    console.log("entra");
    var titulo = document.querySelector("#addPeliculas").value;

        if(titulo.length >=1){
            localStorage.setItem(titulo,titulo);
        }
});

var ul = document.querySelector('#peliculas-list')
for(var i in localStorage){
    
    if(typeof localStorage[i] == 'string'){
            
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

//borrar

    
var formulario_borrar = document.querySelector("#form_borrar_peliculas");

formulario_borrar.addEventListener('submit',function(){
    
    var titulo_borrar = document.querySelector("#borrarPeliculas").value;

        if(titulo_borrar.length >=1){
            localStorage.removeItem(titulo_borrar);
        }
});


