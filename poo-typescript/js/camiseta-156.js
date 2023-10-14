//Clase (molde del objeto)
//leccion 155
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    //Metodos (funciones o acciones del objeto)
    //metodo para el color que me llega
    Camiseta.prototype.cambiarColor = function (color) {
        this.color = color;
    };
    //para conseguir el color
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
//llamo para cambiar color
camiseta.cambiarColor("rojo");
//Para mostrar color
//camiseta.getColor();
/*
camiseta.color = "Rojo";
camiseta.modelo = "Manga Larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;  */
//console.log(camiseta);
var playera = new Camiseta();
playera.cambiarColor("azul");
/*
playera.color = "Azul";
playera.modelo = "Manga Corta";
playera.marca = "Adidas";
playera.talla = "S";
playera.precio = 20;  */
console.log(camiseta.getColor(), playera);
