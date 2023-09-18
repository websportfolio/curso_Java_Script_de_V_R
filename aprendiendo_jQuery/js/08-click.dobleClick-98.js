$(document).ready(function(){
    var caja = $('#caja');

    function cambiaRojo(){
        //sobre esta caja voy a cambiar..
        $(this).css('background', 'blue');
    }
    function cambiaVerde(){
        $(this).css('background','grey');
    }
    //evento hover la forma mas sencilla hacer lo mismo
    caja.hover(cambiaRojo, cambiaVerde);

//evento click doble click
    caja.click(function(){
        $(this).css('background','violet')
                .css('color','white')
    })
//boble click
    caja.dblclick(function(){
        $(this).css('background','pink')
                .css('color','yellow')
    })


});