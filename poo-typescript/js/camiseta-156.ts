//Leccion 159. Herencias 
//Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}
//Clase(Molde del objeto)
 class Camiseta implements CamisetaBase{
    //Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Metodos (funciones o acciones del objeto)

    constructor(color, modelo, marca,talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }
}

//Leccion 160 . Herencia

class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }
}

var sudadera_nike = new Sudadera("azul","para calle", "nike","S", 35);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris Jaspeado");

console.log(sudadera_nike);



var camiseta = new Camiseta("1","2","3","4",20);
console.log(camiseta);

