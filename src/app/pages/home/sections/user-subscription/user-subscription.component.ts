import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewsletterService } from '../../../../services/newsletter.service';

@Component({
  selector: 'app-user-subscription',
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './user-subscription.component.html',
  styleUrl: './user-subscription.component.scss',
})
export class UserSubscriptionComponent {
  subscriptionMessage: string = '';
  newsletterEmail: string = '';

  constructor(private newsletterService: NewsletterService) {}

  subscribeToNewsletter(): void {
    if (this.newsletterEmail.trim() === '') {
      this.subscriptionMessage = 'Por favor, ingresa tu correo electrónico.';

      return;
    }

    this.newsletterService.subscribe(this.newsletterEmail).subscribe({
      next: (response) => {
        this.subscriptionMessage = response.message || '¡Suscripción exitosa!';
        this.newsletterEmail = ''; // Clear the input
      },
      error: (err) => {
        this.subscriptionMessage =
          err.error?.message || 'Error al suscribirse. Inténtalo de nuevo.';
        console.error('Error subscribing to newsletter:', err);
      },
    });
  }
}
