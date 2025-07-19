import { Component, OnInit } from '@angular/core';
import { NewsletterService } from '../../services/newsletter.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { SubscriptionFormComponent } from '../subscription-form/subscription-form.component';

@Component({
  selector: 'app-user-subscription',
  imports: [NgIf, SubscriptionFormComponent],
  templateUrl: './user-subscription.component.html',
  styleUrl: './user-subscription.component.scss',
})
export class UserSubscriptionComponent implements OnInit {
  ngOnInit(): void {}
}
