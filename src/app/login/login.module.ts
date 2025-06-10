import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Módulo que proporciona directivas comunes como ngIf y ngFor
import { FormsModule } from '@angular/forms'; // Módulo necesario para trabajar con formularios (ngModel, etc.)

import { IonicModule } from '@ionic/angular'; // Módulo de Ionic que proporciona componentes y funcionalidades específicas de Ionic

import { LoginPageRoutingModule } from './login-routing.module'; // Módulo de enrutamiento para la página de login

import { LoginPage } from './login.page'; // Componente de la página de login

@NgModule({
  imports: [
    CommonModule, // Se importa el módulo común
    FormsModule, // Se importa el módulo de formularios
    IonicModule, // Se importa el módulo de Ionic
    LoginPageRoutingModule // Se importa el módulo de enrutamiento para esta página
  ],
  declarations: [LoginPage] // Declara el componente de la página de login
})
export class LoginPageModule {} // Exporta el módulo que agrupa todo lo relacionado con la página de login
