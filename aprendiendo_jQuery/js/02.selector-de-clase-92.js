$(document).ready(function(){


//Selector de clases

var mi_clase = $('.zebra').css('padding','5px');



$('.sin_borde').click(function(){
    console.log("Click!")
    $(this).addClass('zebra');
});

console.log(mi_clase[0]);

});