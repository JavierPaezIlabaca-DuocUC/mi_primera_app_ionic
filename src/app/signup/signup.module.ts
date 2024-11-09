import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';

@NgModule({
  imports: [
    CommonModule, // Importa módulos comunes de Angular
    FormsModule,  // Importa módulo para trabajar con formularios
    IonicModule,  // Importa módulos de Ionic para la interfaz de usuario
    SignupPageRoutingModule // Importa el módulo de enrutamiento para la página de registro
  ],
  declarations: [SignupPage] // Declara el componente SignupPage para que sea utilizado en la aplicación
})
export class SignupPageModule {}
