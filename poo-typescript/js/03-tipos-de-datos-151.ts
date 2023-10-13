//Leccion 153.  tipos de datos personalizados
type alfanumerico = string | number;

//string

let cadena: alfanumerico = "victorrobles.es";

cadena = 55;

//number
let numero: number = 12;

//Booleano
let verdadero_falso: boolean = true;

// any
let cualquiera: any = "Hola";
cualquiera = 77;

// Arrays
var lenguajes: Array<any> = ["PHP","JS","CSS",12];

let years:number[] = [12,76,34];

//Leccion 154. Let vs Var en TS
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44; //let actua a nivel de instruccion
    var numero2 = 55; // var acrtua a nivel global

    console.log(numero1, numero2);
}
console.log(numero1, numero2);

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);