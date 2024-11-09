import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {
  // Datos de ejemplo para las publicaciones (este array podría provenir de una API)
  posts = [
    { title: 'Curso de guardia de seguridad', content: 'Este es el contenido de la publicación 1.' },
    { title: 'Curso de CCTV y alarmas', content: 'Este es el contenido de la publicación 2.' },
    { title: 'Curso de supervisor de seguridad', content: 'Este es el contenido de la publicación 3.' }
  ];

  constructor(private router: Router) {}

  // Método para navegar a otra página dentro de la app
  navigateTo(page: string) {
    this.router.navigate([`/tabs/${page}`]); // Redirige a la ruta especificada
  }
}
