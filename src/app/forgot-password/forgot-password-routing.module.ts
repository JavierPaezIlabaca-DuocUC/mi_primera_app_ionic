import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordPage } from './forgot-password.page';

// Definir las rutas para la página de "Olvidé mi contraseña"
const routes: Routes = [
  {
    path: '', // Ruta vacía que se asocia al componente ForgotPasswordPage
    component: ForgotPasswordPage // Componente de la página "Olvidé mi contraseña"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importar las rutas como un módulo hijo
  exports: [RouterModule], // Exportar el RouterModule para que otras partes de la aplicación puedan acceder a las rutas
})
export class ForgotPasswordPageRoutingModule {}
