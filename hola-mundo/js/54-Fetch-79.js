'use strict';

//peticiones asincronas a servidor
//Fetch es sustituto (ajax) y peticiones a servivios / apis rest
var usuarios= [];
var div_usuarios = document.querySelector("#usuarios");
//fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://reqres.in/api/users')
//es una promesa recogemos datos
//recibimos data y convertimos a json a obj de js
//capturamos los datos
.then(function(data){
   return data.json()
})
//ejecutamos then y recojemos data
//dentro de data tenemos datos recojidos y guard en usuarios
.then(users =>{
    usuarios = users.data;
    console.log(usuarios);

    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');
        nombre.innerHTML = i + user.first_name+' '+ user.last_name;
        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = "none";

    });

});