$(document).ready(function(){
   // $("#datos").load('https://reqres.in/')

    //Leccion 106 peticiones de ajax metodo Get
    $.get('https://reqres.in/api/users',{page: 2}, function(response){
            response.data.forEach((element, index )=> {
                $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
            });
    })
})