import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-hero',
  imports: [SlickCarouselModule, FormsModule, CommonModule],
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
