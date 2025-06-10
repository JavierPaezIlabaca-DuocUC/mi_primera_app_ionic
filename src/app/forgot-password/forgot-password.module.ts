import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordPage } from './forgot-password.page';

@NgModule({
  imports: [
    CommonModule, // Módulo común de Angular, necesario para las directivas comunes (ngIf, ngFor, etc.)
    FormsModule, // Módulo necesario para trabajar con formularios en Angular
    IonicModule, // Módulo de Ionic para acceder a sus componentes
    ForgotPasswordPageRoutingModule // Importar el módulo de rutas de la página "Olvidé mi contraseña"
  ],
  declarations: [ForgotPasswordPage] // Declarar el componente ForgotPasswordPage en este módulo
})
export class ForgotPasswordPageModule {}
