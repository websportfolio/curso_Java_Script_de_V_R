$(document).ready(function(){


//Focus y Bluer


var nombre = $("#nombre");
nombre.focus(function(){
    
    $(this).css("border","2px solid green");
    console.log("Focus en el elemento nombre");
});


nombre.blur(function(){
    $(this).css('border','5px solid red');
    
    $("#datos").text($(this).val()).show();
})

})