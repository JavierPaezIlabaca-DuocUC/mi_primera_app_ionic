import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.page.html',
  styleUrls: ['signup.page.scss'],
})
export class SignupPage {
  username: string = ''; // Almacena el nombre de usuario
  email: string = ''; // Almacena el correo electrónico
  password: string = ''; // Almacena la contraseña
  confirmPassword: string = ''; // Almacena la confirmación de la contraseña

  constructor(private router: Router, private alertController: AlertController) {}

  // Verificar si las contraseñas coinciden
  passwordsMatch(): boolean {
    return this.password === this.confirmPassword; // Devuelve verdadero si las contraseñas coinciden
  }

  // Función llamada cuando el formulario de registro es enviado
  async onSignup() {
    if (this.passwordsMatch()) {
      // Ejemplo: Lógica simple de registro de usuario (reemplazar con la llamada a una API)
      const user = { username: this.username, email: this.email, password: this.password };

      console.log('Usuario registrado:', user);  // Reemplazar con la lógica de registro real

      // Mostrar mensaje de éxito
      const alert = await this.alertController.create({
        header: '¡Éxito!',
        message: 'Tu cuenta ha sido creada.',
        buttons: ['OK'],
      });

      await alert.present(); // Mostrar la alerta

      // Navegar a la página de inicio de sesión después de un registro exitoso
      this.router.navigate(['/login']);
    } else {
      // Mostrar mensaje de error si las contraseñas no coinciden
      const alert = await this.alertController.create({
        header: '¡Error!',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK'],
      });

      await alert.present(); // Mostrar la alerta
    }
  }

  // Navegar a la página de inicio de sesión
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
