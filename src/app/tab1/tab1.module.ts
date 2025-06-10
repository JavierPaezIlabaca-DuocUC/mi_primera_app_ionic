import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    CommonModule, // Módulo necesario para directivas comunes como ngIf, ngFor
    FormsModule, // Módulo para trabajar con formularios
    IonicModule, // Módulo de Ionic necesario para los componentes de la UI
    Tab1PageRoutingModule // Importar el módulo de rutas para esta pestaña
  ],
  declarations: [Tab1Page] // Declarar el componente Tab1Page en este módulo
})
export class Tab1PageModule {}
