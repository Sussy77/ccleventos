import { Component, OnInit } from '@angular/core';
import { NewsletterService } from '../../services/newsletter.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-subscription',
  imports: [FormsModule, NgIf],
  templateUrl: './user-subscription.component.html',
  styleUrl: './user-subscription.component.scss',
})
export class UserSubscriptionComponent implements OnInit {
  newsletterEmail: string = '';
  subscriptionMessage: string = '';

  constructor(private newsletterService: NewsletterService) {}

  ngOnInit(): void {}

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
