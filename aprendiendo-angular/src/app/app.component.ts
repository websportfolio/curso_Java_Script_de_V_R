import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Master de Java Script y Angular!';
  public mostrar_videjuegos: boolean = true;

  ocultarVideojuegos(value: boolean){
    this.mostrar_videjuegos = value;
  }

}
