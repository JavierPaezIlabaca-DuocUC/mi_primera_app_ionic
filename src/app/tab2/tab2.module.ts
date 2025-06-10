import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { Tab2Page } from './tab2.page';

@NgModule({
  imports: [
    CommonModule, // Módulo necesario para directivas comunes como ngIf, ngFor
    FormsModule, // Módulo necesario para trabajar con formularios y datos de entrada
    IonicModule, // Módulo de Ionic que proporciona componentes visuales como botones y tarjetas
    Tab2PageRoutingModule // Importar el módulo de rutas para esta pestaña
  ],
  declarations: [Tab2Page] // Declarar el componente de la pestaña 2
})
export class Tab2PageModule {}
