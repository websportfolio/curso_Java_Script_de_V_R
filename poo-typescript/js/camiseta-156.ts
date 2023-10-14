//Clase (molde del objeto)
//leccion 155
export class Camiseta{
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
//Leccion 156. Constructor para dar el valor a la clase
constructor(color, modelo, marca, talla, precio){
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;
}
//metodo para el color que me llega
public cambiarColor(color){
    this.color = color;
}
//para conseguir el color
public getColor(){
    return this.color
}

}

//var camiseta = new Camiseta("rojo", "manga larga", "nike", "L", 14);
//llamo para cambiar color
//camiseta.cambiarColor("Rojo");
//Para mostrar color
//camiseta.getColor();
/*
camiseta.color = "Rojo";
camiseta.modelo = "Manga Larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;  */

//console.log(camiseta);

//var playera = new Camiseta();
//playera.cambiarColor("azul")
/*
playera.color = "Azul";
playera.modelo = "Manga Corta";
playera.marca = "Adidas";
playera.talla = "S";
playera.precio = 20;  */

//console.log(camiseta.getColor(), playera);
//console.log(camiseta);

