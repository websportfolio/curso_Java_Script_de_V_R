$(document).ready(function(){
    console.log("Hola draggable")
    //Leccion 111. Draggable --> Mover elemento por la pagina
    $(".elemento").draggable();

    //Leccion 112. Resizable--> Redimencionar elemento
    $('.elemento').resizable();

    //Leccion 113. Selectable --> metodo seleccionable

    $('.lista-seleccionable').selectable();
})