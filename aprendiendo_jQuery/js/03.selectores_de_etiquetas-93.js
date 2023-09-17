$(document).ready(function(){
//añade una clase
    $('.sin_borde').click(function(){
        console.log("Click!")
        $(this).addClass('zebra');
    });

//selectores de etiquetas

var parrafo = $('p').css('cursor','pointer');

parrafo.click(function(){
    var thiss = $(this);
    if(!thiss.hasClass('grande')){
        thiss.addClass('grande')
    }else{
        thiss.removeClass('grande')
    }
    
});


});