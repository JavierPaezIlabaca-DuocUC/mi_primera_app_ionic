import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importa las herramientas necesarias para las pruebas
import { LoginPage } from './login.page'; // Importa el componente LoginPage que será probado

describe('LoginPage', () => {
  let component: LoginPage; // Declaración de la variable que referenciará el componente LoginPage
  let fixture: ComponentFixture<LoginPage>; // Declaración de la variable que contendrá el fixture de la prueba (instancia del componente)

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage); // Crea una instancia del componente LoginPage
    component = fixture.componentInstance; // Asocia el componente a la variable component
    fixture.detectChanges(); // Realiza la detección de cambios en el componente para actualizar el DOM
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se haya creado correctamente
  });
});
