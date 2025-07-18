import { Component, OnInit } from '@angular/core';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NewsletterService } from '../../services/newsletter.service';
import { EventService } from '../../services/event.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { UserSubscriptionComponent } from '../../components/user-subscription/user-subscription.component';
import { UserAssociatedComponent } from '../../components/user-associated/user-associated.component';
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
    UserSubscriptionComponent,
    UserAssociatedComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  events: any[] = []; // Array to store fetched events

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

  // ------------------------------------------------------------------------------------------
  // @ LifeCycle Hooks
  // ------------------------------------------------------------------------------------------

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

  // ------------------------------------------------------------------------------------------
  // @ Public Methods
  // ------------------------------------------------------------------------------------------
}
