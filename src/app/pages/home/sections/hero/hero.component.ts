import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EventCardComponent } from '../../../../components/event-card/event-card.component';

@Component({
  selector: 'app-hero',
  imports: [
    SlickCarouselModule,
    FormsModule,
    CommonModule,
    EventCardComponent,
    NgIf,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
}
