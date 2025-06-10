import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2Page } from './tab2.page';

// Definir las rutas para la pestaña 2
const routes: Routes = [
  {
    path: '', // Ruta predeterminada para la pestaña 2
    component: Tab2Page // Componente que se cargará al acceder a esta ruta
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importar las rutas definidas para esta pestaña
  exports: [RouterModule], // Exportar RouterModule para su uso en otras partes de la app
})
export class Tab2PageRoutingModule {}
