//Importar modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

//Importar los componentes
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";

//Array de rutas
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'videojuego', component: VideojuegoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: '**', component: HomeComponent}
];

//Exportat el modulo del router
export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
