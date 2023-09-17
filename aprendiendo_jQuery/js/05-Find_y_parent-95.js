$(document).ready(function(){

//$('p, a').addClass('margen-superior');


//metodo buscar Find para buscar dentro de arbol muy grande
//var busqueda = $('#caja').find('.resaltado');

//console.log(busqueda);

//como salir del selector padre para buscar otra cosa

var elemento2 = $(".elemento2");

// Usa .parent() en el elemento seleccionado
var elementoPadre = elemento2.eq(0).parent().parent().parent().find('[title = "Google"]');
console.log(elementoPadre);


var elemento3 = $(".elemento2");
//Metodo para seleccionar elementos
// Usa .parent() en el elemento seleccionado
var elementoPadre2 = elemento3.parent().parent().find('.resaltado');
console.log(elementoPadre2);

});