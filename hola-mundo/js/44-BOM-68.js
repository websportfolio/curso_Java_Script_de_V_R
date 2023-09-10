'use strict';

//BOM -> Browser Obyect Model


function getBOM(){
    
//console.log(window.innerWidth);//anchura de ventana
//console.log(window.innerHeight);//altura de ventana


console.log(screen.width);//anchura de ventana
console.log(screen.height);//altura de ventana

console.log(window.location.href)
}

getBOM();

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url,"","width=400, height=300");
}

