//Clase (molde del objeto)
class Camiseta{
    //Propiedades (caracteristicas del objeto)
    //Variables
   /* public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;  */

    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
  
//Metodos (funciones o acciones del objeto)
//metodo para el color que me llega
public cambiarColor(color){
    this.color = color;
}
//para conseguir el color
public getColor(){
    return this.color
}

}

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
playera.cambiarColor("azul")
/*
playera.color = "Azul";
playera.modelo = "Manga Corta";
playera.marca = "Adidas";
playera.talla = "S";
playera.precio = 20;  */

console.log(camiseta.getColor(), playera);

