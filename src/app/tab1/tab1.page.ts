import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html', // Ruta de la plantilla HTML
  styleUrls: ['./tab1.page.scss'], // Ruta de los estilos CSS
})
export class Tab1Page {
  // Datos de ejemplo para las publicaciones (este array podría provenir de una API)
  posts = [
    { title: 'Oferta de trabajo 1', content: 'Este es el contenido de la publicación 1.' },
    { title: 'Oferta de trabajo 2', content: 'Este es el contenido de la publicación 2.' },
    { title: 'Oferta de trabajo 3', content: 'Este es el contenido de la publicación 3.' },
    { title: 'Oferta de trabajo 4', content: 'Este es el contenido de la publicación 4.' },
    { title: 'Oferta de trabajo 5', content: 'Este es el contenido de la publicación 5.' },
    { title: 'Oferta de trabajo 6', content: 'Este es el contenido de la publicación 6.' },
    { title: 'Oferta de trabajo 7', content: 'Este es el contenido de la publicación 7.' },
    { title: 'Oferta de trabajo 8', content: 'Este es el contenido de la publicación 8.' },
    { title: 'Oferta de trabajo 9', content: 'Este es el contenido de la publicación 9.' },
    { title: 'Oferta de trabajo 10', content: 'Este es el contenido de la publicación 10.' },
    { title: 'Oferta de trabajo 11', content: 'Este es el contenido de la publicación 11.' },
  ];

  constructor(private router: Router) {}

  // Método para navegar a otra página dentro de la app
  navigateTo(page: string) {
    this.router.navigate([`/tabs/${page}`]); // Redirige a la ruta especificada
  }
}
