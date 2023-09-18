$(document).ready(function(){
    //MouseOver y mouseOut
    var caja = $('#caja');
/*
    caja.mouseover(function(){
        //sobre esta caja voy a cambiar..
        $(this).css('background', 'red');
    })

    caja.mouseout(function(){
        $(this).css('background','green')
    })
    */
    function cambiaRojo(){
        //sobre esta caja voy a cambiar..
        $(this).css('background', 'blue');
    }
    function cambiaVerde(){
        $(this).css('background','grey');
    }
    //evento hover la forma mas sencilla hacer lo mismo
    caja.hover(cambiaRojo, cambiaVerde);
});