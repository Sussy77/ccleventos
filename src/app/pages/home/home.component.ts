import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { UserSubscriptionComponent } from '../../components/user-subscription/user-subscription.component';
import { UserAssociatedComponent } from '../../components/user-associated/user-associated.component';
import { CarouselRowsComponent } from '../../components/carousel-rows/carousel-rows.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HeroComponent,
    UserSubscriptionComponent,
    UserAssociatedComponent,
    CarouselRowsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  defaultImageUrl: string = 'default.webp';
  // defaultImageUrl: string ='assets/images/default.webp';

  constructor() {}

  // ------------------------------------------------------------------------------------------
  // @ LifeCycle Hooks
  // ------------------------------------------------------------------------------------------

  ngOnInit(): void {}

  // ------------------------------------------------------------------------------------------
  // @ Public Methods
  // ------------------------------------------------------------------------------------------
}
