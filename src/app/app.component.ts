import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SlickCarouselModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Eventos_CCL';
}
