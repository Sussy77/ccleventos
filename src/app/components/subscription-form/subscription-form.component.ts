import { Component } from '@angular/core';
import { NewsletterService } from '../../services/newsletter.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize, take } from 'rxjs';

@Component({
  selector: 'app-subscription-form',
  imports: [FormsModule, NgIf],
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.scss',
})
export class SubscriptionFormComponent {
  newsletterEmail: string = '';
  subscriptionMessage: string = '';

  constructor(private newsletterService: NewsletterService) {}

  subscribeToNewsletter(): void {
    if (this.newsletterEmail.trim() === '') {
      this.subscriptionMessage = 'Por favor, ingresa tu correo electrónico.';
      return;
    }

    this.newsletterService
      .subscribe(this.newsletterEmail)
      .pipe(
        take(1),
        finalize(() => {
          this.newsletterService.showDialog = true;
        })
      )
      .subscribe({
        next: (response) => {
          this.subscriptionMessage =
            response.message || '¡Suscripción exitosa!';
          this.newsletterEmail = '';
        },
        error: (err) => {
          this.subscriptionMessage =
            err.error?.message || 'Error al suscribirse. Inténtalo de nuevo.';
          console.error('Error subscribing to newsletter:', err);
        },
      });
  }
}
