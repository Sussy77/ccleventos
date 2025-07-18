import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgFor, NgIf } from '@angular/common';
import { EventService } from '../../services/event.service';
import { EventCardComponent } from '../event-card/event-card.component';

@Component({
  selector: 'app-carousel-rows',
  imports: [SlickCarouselModule, EventCardComponent, NgIf, NgFor],
  templateUrl: './carousel-rows.component.html',
  styleUrl: './carousel-rows.component.scss',
})
export class CarouselRowsComponent {
  events: any[] = []; // Array to store fetched events
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

  constructor(private eventService: EventService) {}

  // ------------------------------------------------------------------------------------------
  // @ LifeCycle Hooks
  // ------------------------------------------------------------------------------------------

  ngOnInit(): void {
    let events$ = this.eventService.getAllEventos();
    events$.subscribe((response: any) => {
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
