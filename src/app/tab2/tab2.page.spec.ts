import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2Page); // Crear el componente de la pestaña 2 para las pruebas
    component = fixture.componentInstance; // Obtener la instancia del componente
    fixture.detectChanges(); // Detectar cambios y actualizar la vista
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy(); // Verificar que el componente se haya creado correctamente
  });
});
