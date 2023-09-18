$(document).ready(function(){
    console.log($('a').length)

    

reloadLincks();//cargamos funcion
      /*añadir enlace*/
        //seleccionamos elemento button y cuando le damos el click
        $('#add_button')
        .removeAttr('disabled')
        .click(function(){
            // selecciono ul de html luego añado => vamos a recoger el valor del input con funcion val()
           // $('#menu').prepend('<li><a href="'+$('#add_linck').val()+'"> </a></li>');
           // $('#menu').append('<li><a href="'+$('#add_linck').val()+'"> </a></li>');
            $('#menu').before('<li><a href="'+$('#add_linck').val()+'"> </a></li>');
            $('#add_linck').val('');
            reloadLincks();
        })

    function reloadLincks(){
                //con funcion each recorro mis elementos
            $('a').each(function(){
                console.log($(this));
                //selecionamos atributo href://
                var that = $(this);
                var enlace = that.attr('href');
                //agrego nuevo atributo
                that.attr('target','_blank')
                //metemos enlaces como texto con funcion text() al body de html
                that.text(enlace);
            })
    }
 

})