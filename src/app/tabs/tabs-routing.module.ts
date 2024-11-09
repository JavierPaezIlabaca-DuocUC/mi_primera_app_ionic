import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

// Definimos las rutas para las pestañas
const routes: Routes = [
  {
    path: '', // Ruta vacía que cargará el componente TabsPage
    component: TabsPage, // Componente que manejará las pestañas
    children: [ // Definimos las rutas hijas para cada pestaña
      {
        path: 'tab1', // Ruta para la pestaña 1
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule) // Cargar el módulo de la pestaña 1
      },
      {
        path: 'tab2', // Ruta para la pestaña 2
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule) // Cargar el módulo de la pestaña 2
      },
      {
        path: 'tab3', // Ruta para la pestaña 3
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule) // Cargar el módulo de la pestaña 3
      },
      {
        path: '', // Ruta predeterminada
        redirectTo: '/tabs/tab1', // Redirigir a la pestaña 1 por defecto
        pathMatch: 'full' // Asegurarse de que la ruta coincida completamente
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importar las rutas como un módulo hijo
  exports: [RouterModule] // Exportar el RouterModule para usar las rutas en otras partes de la app
})
export class TabsPageRoutingModule {}
