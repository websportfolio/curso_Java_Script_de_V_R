$(document).ready(function(){
    //MouseOver y mouseOut
    var caja = $('#caja');

    caja.mouseover(function(){
        //sobre esta caja voy a cambiar..
        $(this).css('background', 'red');
    })

    caja.mouseout(function(){
        $(this).css('background','green')
    })
});