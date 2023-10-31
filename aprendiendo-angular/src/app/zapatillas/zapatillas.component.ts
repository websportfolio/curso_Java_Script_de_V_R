import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de Zapatillas!";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];

    constructor(){
      this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Nike Air', 'Nike','Red',40, true),
            new Zapatilla('Reebok Classic', 'Reebok','Blanco',80, true),
            new Zapatilla('Reebok Spartan', 'Reebok','Black',180, true),
            new Zapatilla('Nice Runner', 'Nike','Black',60, true),
            new Zapatilla('Adidas Yizzy', 'Adidas','Grey',130, false)
        ];
    }

    ngOnInit(): void {
      console.log(this.zapatillas);

      this.getMarcas();
    }

    getMarcas(){
      this.zapatillas.forEach((zapatilla, index) =>{

        //para ver q no se duplican
        //en el caso q no lo encuentre
        if(this.marcas.indexOf(zapatilla.marca)<0){
          //cuando no existe en array hago push
          this.marcas.push(zapatilla.marca);
        }


          //console.log(index);
      });
      console.log(this.marcas);
    }

}
