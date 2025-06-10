import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupPage } from './signup.page';

const routes: Routes = [
  {
    path: '', // Ruta vacía, carga la página de registro
    component: SignupPage // Componente asociado a esta ruta
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importa el módulo de enrutamiento para la página de registro
  exports: [RouterModule], // Exporta el módulo para usarlo en otras partes del proyecto
})
export class SignupPageRoutingModule {}
