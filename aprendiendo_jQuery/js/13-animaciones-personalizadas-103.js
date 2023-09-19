$(document).ready(function(){
    var caja = $("#caja");
    $('#mostrar').hide();

    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show()
        //$('#caja').show('fast');
        //$('#caja').fadeIn('fast');
        //$('#caja').fadeTo('slow',1);
        caja.slideDown('slow');
    })

    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show()
        //$('#caja').hide('fast');
        //$('#caja').fadeOut('slow');
       // $('#caja').fadeTo('slow', 0);
       caja.slideUp('slow');
    })
    //////////////todo en uno////////////////////////

    $('#todo_enuno').click(function(){
        caja.toggle('fast');
    })


    $("#animame").click(function(){
        caja.animate({
                        marginLeft: '500px',
                        fontSize:'40px',
                        height:'100px'
                    }, 'slow')
                    .animate({
                        borderRadius:'900px',
                        marginTop:'80px'
                    },'slow')

                    .animate({
                        borderRadius:'0px',
                        marginLeft:'0px'
                    },'slow')

                    .animate({
                        borderRadius:'100px',
                        marginTop:'0px'
                    },'slow')
                    ;
    })
})