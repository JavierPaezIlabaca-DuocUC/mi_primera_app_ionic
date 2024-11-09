import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage); // Crear el componente de pruebas
    component = fixture.componentInstance; // Obtener la instancia del componente
    fixture.detectChanges(); // Detectar cambios en el componente
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy(); // Verificar que el componente se cree correctamente
  });
});
