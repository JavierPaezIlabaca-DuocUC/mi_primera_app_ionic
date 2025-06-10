import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html', // Ruta del archivo HTML de la pestaña 2
  styleUrls: ['./tab2.page.scss'], // Ruta del archivo SCSS para los estilos de la pestaña 2
})
export class Tab2Page {
  // Definir las preguntas del cuestionario con opciones y la respuesta correcta
  questions = [
    { text: '¿Cuál es la capital de Francia?', options: ['Berlín', 'Madrid', 'París', 'Roma'], correctAnswer: 'París' },
    { text: '¿Cuánto es 2 + 2?', options: ['3', '4', '5', '6'], correctAnswer: '4' },
    { text: '¿Qué planeta es conocido como el planeta rojo?', options: ['Tierra', 'Marte', 'Júpiter', 'Venus'], correctAnswer: 'Marte' },
    { text: '¿Quién escribió "Hamlet"?', options: ['Charles Dickens', 'Mark Twain', 'William Shakespeare', 'J.K. Rowling'], correctAnswer: 'William Shakespeare' },
    { text: '¿Cuál es el mamífero más grande?', options: ['Elefante', 'Ballena Azul', 'Tiburón Blanco', 'Jirafa'], correctAnswer: 'Ballena Azul' }
  ];

  currentQuestionIndex: number = 0; // Índice de la pregunta actual
  selectedAnswer: string | undefined; // Respuesta seleccionada
  score: number = 0; // Puntuación inicial
  quizCompleted: boolean = false; // Estado que indica si el cuestionario se ha completado

  constructor(private router: Router) {}

  // Función para enviar la respuesta seleccionada
  submitAnswer() {
    if (this.selectedAnswer) {
      if (this.selectedAnswer === this.questions[this.currentQuestionIndex].correctAnswer) {
        this.score++; // Si la respuesta es correcta, incrementar la puntuación
      }
      this.selectedAnswer = undefined; // Limpiar la respuesta seleccionada
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++; // Avanzar a la siguiente pregunta
      } else {
        this.quizCompleted = true; // Si ya no hay más preguntas, marcar el cuestionario como completado
      }
    } else {
      alert('Por favor selecciona una respuesta.'); // Mensaje de advertencia si no se seleccionó respuesta
    }
  }

  // Función para reiniciar el cuestionario
  restartQuiz() {
    this.currentQuestionIndex = 0; // Restablecer el índice de la pregunta
    this.score = 0; // Restablecer la puntuación
    this.quizCompleted = false; // Restablecer el estado de finalización del cuestionario
  }
}
