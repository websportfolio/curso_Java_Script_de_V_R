'use strict';

//peticiones asincronas a servidor
//Fetch es sustituto (ajax) y peticiones a servivios / apis rest

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");
//fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://reqres.in/api/users')
//es una promesa recogemos datos
//recibimos data y convertimos a json a obj de js
//capturamos los datos
getUsuarios().then(function(data){
   return data.json()
})
//ejecutamos then y recojemos data
//dentro de data tenemos datos recojidos y guard en usuarios
.then(users =>{
    listadosUsuarios(users.data);


   
    return getInfo();
})
//es de get info
.then(data => {
    div_profesor.innerHTML = data;
    return getJanet();
})
/////////////////////
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);

        
    })
       

function getUsuarios(){
    return fetch('https://reqres.in/api/users');
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
  
    var profesor = {
        nombre: 'Victor',
        apellidos: 'Robles',
        url: 'https://victorroblesweb.es'
    };

    return new Promise((resolve, reject) =>{
        var profesor_string = "";
        setTimeout(function(){
          profesor_string  = JSON.stringify(profesor);

          if(typeof profesor_string != 'string' || profesor_string == '') return reject('error 1');
        
          return resolve(profesor_string);

        },3000);

        
       
    });
    
}


function listadosUsuarios(usuarios){

    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');
        nombre.innerHTML = i + user.first_name+' '+ user.last_name;
        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = "none";

    });

}

function mostrarJanet(user){

console.log(user);
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');
        nombre.innerHTML =  user.first_name+' '+ user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';
        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);

        
        document.querySelector("#janet .loading").style.display = "none";



}