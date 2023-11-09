import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit{
  public nombre: any;
  public followers: number = 0;


  ngOnInit(): void {
    // Your initialization code goes here
    this._route.params.subscribe((params: Params) =>{
      this.nombre = params['nombre'];
      this.followers = +params['followers'];
      console.log(typeof +params['followers']);

      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home']);
      }

    });
  }

  constructor(

    private _route: ActivatedRoute,
    private _router: Router,



  ){}

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }


}
