import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    CommonModule, // Módulo común de Angular, necesario para directivas como ngIf, ngFor, etc.
    FormsModule, // Módulo para trabajar con formularios
    IonicModule, // Módulo de Ionic, necesario para sus componentes
    TabsPageRoutingModule // Importar el módulo de rutas de las pestañas
  ],
  declarations: [TabsPage] // Declarar el componente TabsPage en este módulo
})
export class TabsPageModule {}
