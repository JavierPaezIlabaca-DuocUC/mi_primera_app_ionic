import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1Page); // Crear el componente de prueba para la pestaña 1
    component = fixture.componentInstance; // Obtener la instancia del componente
    fixture.detectChanges(); // Detectar cambios en el componente
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy(); // Verificar que el componente se haya creado correctamente
  });
});
