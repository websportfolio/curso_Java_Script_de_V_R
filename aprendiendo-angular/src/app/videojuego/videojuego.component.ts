import { Component } from '@angular/core';

@Component({
  selector: 'videojuego',
  template: `
      <h2>Componente de Videojuego</h2>
      <ul>
        <li>GTA</li>
        <li>Prince of Percia</li>
        <li>Tekken</li>
        <li>Mario Bother</li>
      </ul>
  `
})
export class VideojuegoComponent {

    constructor(){
      console.log("Se ha cargado el componente: videojuego.component.ts")
    }
}
