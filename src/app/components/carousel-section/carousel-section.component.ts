import { NgIf, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EventCardComponent } from '../event-card/event-card.component';

@Component({
  selector: 'app-carousel-section',
  imports: [SlickCarouselModule, EventCardComponent, NgIf, NgFor],
  templateUrl: './carousel-section.component.html',
  styleUrl: './carousel-section.component.scss',
})
export class CarouselSectionComponent {
  @Input() data: {
    title: string;
    linkLabel: string;
  };
  @Input() slides: any[];

  config = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  eventsConfig = {
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
}
