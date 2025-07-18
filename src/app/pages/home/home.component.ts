import { Component, OnInit } from '@angular/core';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NewsletterService } from '../../services/newsletter.service';
import { EventService } from '../../services/event.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
//import { NgxSlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SlickCarouselModule,
    FormsModule,
    CommonModule,
    EventCardComponent,
    HeroComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  events: any[] = []; // Array to store fetched events
  newsletterEmail: string = '';
  subscriptionMessage: string = '';
  defaultImageUrl: string = 'default.webp';
  // defaultImageUrl: string ='assets/images/default.webp';

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  eventosConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  constructor(
    private newsletterService: NewsletterService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    let events$ = this.eventService.getAllEventos();
    events$.subscribe((response) => {
      this.events = response;

      // next: (data) => {
      //   this.events = data;
      //   console.log(data);
      // },
      // error: (err) => {
      //   console.error('Error fetching events:', err);
      // },
      // complete:()=>{
      //   console.log('suscription complit');
      // }
    });
  }

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
