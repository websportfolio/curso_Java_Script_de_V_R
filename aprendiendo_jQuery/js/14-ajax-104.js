$(document).ready(function(){
   // $("#datos").load('https://reqres.in/')

    //Leccion 106 peticiones de ajax metodo Get
    $.get('https://reqres.in/api/users',{page: 2}, function(response){
            response.data.forEach((element, index )=> {
                $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
            });
    });
    //Leccion 107. metodo Post de Ajax
   

    $('#formulario').submit(function(e){
        e.preventDefault();//para que no rediriga la pagina
        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
        /*
        console.log(usuario);
        $.post($(this).attr("action"), usuario, function(response){
    console.log(response)
        }).done(function(){
            alert("Usuario añadido correctamente");
        })
        */
        //Leccion 108. Metodo $.ajax mandando datos
        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario...");
            },
            //en el caso que todo va bien
            success: function(response){
                console.log(response)
            },
            //si no q devuelve error
            error: function(){
                console.log('Ha ocurrido un error')
            },
            //ponemos funcion de timeout
            timeout:1111

            
        });

        return false;
    })

})