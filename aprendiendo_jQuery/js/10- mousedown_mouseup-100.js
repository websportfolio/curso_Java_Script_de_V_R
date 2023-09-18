$(document).ready(function(){



    //Focus y Bluer


var nombre = $("#nombre");
var datos = $("#datos")
nombre.focus(function(){
    
    $(this).css("border","2px solid green");
    console.log("Focus en el elemento nombre");
});


nombre.blur(function(){
    $(this).css('border','5px solid red');
    
    datos.text($(this).val()).show();
})
    //moysedown y mouseup
    datos.mousedown(function(){
        $(this).css("border-color","gray")
        console.log("Mousedown");
    })
    datos.mouseup(function(){
        $(this).css("border-color","red")
        console.log("Mouse UP");
    })

    //mousemove
    //$(document).on("mousemove",function(event){
        $(document).mousemove(function( event ) {
            $("body").css("cursor","none");
            var sigueme = $("#sigueme") ;
        sigueme.css("left",event.clientX);
        sigueme.css("top",event.clientY);

    })
})