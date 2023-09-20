$(document).ready(function(){
    console.log("Hola draggable")
    //Leccion 111. Draggable --> Mover elemento por la pagina
    $(".elemento").draggable();

    //Leccion 112. Resizable--> Redimencionar elemento
    $('.elemento').resizable();

    //Leccion 113. Selectable --> metodo seleccionable seleccionar elementos

   // $('.lista-seleccionable').selectable();

    //Leccion114. metodo short ordena

    $('.lista-seleccionable').sortable({
        update: function(event,ui){
            console.log("Ha cambiado la lista");
        }
    });

    // Leccion 115. Droppable
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area!")
        }
    });

    //Leccion 116: Efectos de jQuery UI

    $('#mostrar').click(function(){
       // $('.mostrar-efectos').toggle('fade');
        //$('.mostrar-efectos').toggle('blind');
        //$('.mostrar-efectos').toggle('slide');
        //$('.mostrar-efectos').toggle('drop');
        //$('.mostrar-efectos').toggle('fold');
        //$('.mostrar-efectos').toggle('puff');
        //$('.mostrar-efectos').toggle('scale');
        $('.mostrar-efectos').toggle('shake','slow');
    })

    //Leccion 117: Tooltip
    $(document).tooltip();

})