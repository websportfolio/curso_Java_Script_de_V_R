import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de Zapatillas!";
    public zapatillas: Array<Zapatilla>

    constructor(){
        this.zapatillas = [
            new Zapatilla('Nike Air', 'Nike','Red',190, true),
            new Zapatilla('Reebok Classic', 'Reebok','Blanco',80, true),
            new Zapatilla('Nice Runner', 'Nike','Black',60, true),
            new Zapatilla('Adidas Yizzy', 'Adidas','Grey',130, false)
        ];
    }

    ngOnInit(): void {
      console.log(this.zapatillas);
    }
}
