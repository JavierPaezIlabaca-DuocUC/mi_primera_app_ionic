import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

// Definición de las rutas para la página de login
const routes: Routes = [
  {
    path: '', // Ruta por defecto (vacía)
    component: LoginPage // Componente asociado a esta ruta
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importa el módulo de rutas con las rutas definidas
  exports: [RouterModule], // Exporta el RouterModule para que esté disponible en otras partes de la app
})
export class LoginPageRoutingModule {} // Exporta la clase del módulo de enrutamiento de la página de login
