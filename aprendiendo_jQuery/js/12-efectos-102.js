$(document).ready(function(){
    
$('#mostrar').hide();

    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show()
        //$('#caja').show('fast');
        //$('#caja').fadeIn('fast');
        //$('#caja').fadeTo('slow',1);
        $('#caja').slideDown('slow');
    })

    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show()
        //$('#caja').hide('fast');
        //$('#caja').fadeOut('slow');
       // $('#caja').fadeTo('slow', 0);
       $('#caja').slideUp('slow');
    })
    //////////////todo en uno////////////////////////

    $('#todo_enuno').click(function(){
        $('#caja').toggle('fast');
    })
    
})