import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: 'forgot-password.page.html',
  styleUrls: ['forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  email: string = ''; // Almacena el correo electrónico ingresado por el usuario

  constructor(private router: Router, private alertController: AlertController) {}

  // Función llamada cuando se envía el formulario para restablecer la contraseña
  async onSubmit() {
    if (this.email) {
      // Ejemplo: Simulación del envío de un correo de restablecimiento de contraseña (reemplazar con lógica real de API)
      console.log('Correo de restablecimiento de contraseña enviado a:', this.email);

      // Mostrar mensaje de éxito
      const alert = await this.alertController.create({
        header: '¡Éxito!',
        message: 'Se ha enviado un enlace para restablecer tu contraseña a tu correo electrónico.',
        buttons: ['OK'],
      });

      await alert.present(); // Mostrar la alerta

      // Navegar a la página de inicio de sesión
      this.router.navigate(['/login']);
    } else {
      // Mostrar mensaje de error si el campo de correo electrónico está vacío (aunque el formulario lo requiere)
      const alert = await this.alertController.create({
        header: '¡Error!',
        message: 'Por favor ingresa una dirección de correo electrónico válida.',
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
