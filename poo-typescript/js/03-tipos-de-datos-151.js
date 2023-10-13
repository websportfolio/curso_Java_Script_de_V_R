//string
var cadena = "victorrobles.es";
cadena = 55;
//number
var numero = 12;
//Booleano
var verdadero_falso = true;
// any
var cualquiera = "Hola";
cualquiera = 77;
// Arrays
var lenguajes = ["PHP", "JS", "CSS", 12];
var years = [12, 76, 34];
//Leccion 154. Let vs Var en TS
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44; //let actua a nivel de instruccion
    var numero2 = 55; // var acrtua a nivel global
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
