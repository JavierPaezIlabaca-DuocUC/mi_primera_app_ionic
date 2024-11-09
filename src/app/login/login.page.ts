import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = ''; // Variable para almacenar el nombre de usuario
  password: string = ''; // Variable para almacenar la contraseña

  constructor(private router: Router, private alertController: AlertController) {}

  // Función llamada cuando el formulario de inicio de sesión es enviado
  async onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      // Ejemplo: Navegar a la página de inicio (home) después de un inicio de sesión exitoso
      this.router.navigate(['/tabs']);
    } else {
      // Mostrar un mensaje de error si el inicio de sesión falla
      const alert = await this.alertController.create({
        header: 'Inicio de sesión fallido', // Título del mensaje de alerta
        message: 'Nombre de usuario o contraseña incorrectos.', // Mensaje de error
        buttons: ['OK'], // Botón para cerrar la alerta
      });

      await alert.present(); // Mostrar la alerta
    }
  }

  // Navegar a la página de "Olvidé mi contraseña"
  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  // Navegar a la página de "Registrarse"
  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
