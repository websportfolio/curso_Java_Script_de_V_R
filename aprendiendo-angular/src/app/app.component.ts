import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Master de Java Script y Angular!';
  public mostrar_videjuegos: boolean = true;
  public descripcion :string;
  public config;
  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  ocultarVideojuegos(value: boolean){
    this.mostrar_videjuegos = value;
  }

}
