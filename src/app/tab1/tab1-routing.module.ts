import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab1Page } from './tab1.page';

// Definición de rutas para la pestaña 1
const routes: Routes = [
  {
    path: '', // Ruta predeterminada para la pestaña 1
    component: Tab1Page // Componente que se mostrará cuando se acceda a esta ruta
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importar las rutas definidas para este módulo
  exports: [RouterModule], // Exportar el RouterModule para que se pueda usar en otras partes de la app
})
export class Tab1PageRoutingModule {}
