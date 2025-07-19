import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgFor, NgIf } from '@angular/common';
import { EventService } from '../../services/event.service';
import { EventCardComponent } from '../event-card/event-card.component';
import { CarouselSectionComponent } from '../carousel-section/carousel-section.component';

@Component({
  selector: 'app-carousel-rows',
  imports: [NgFor, CarouselSectionComponent],
  templateUrl: './carousel-rows.component.html',
  styleUrl: './carousel-rows.component.scss',
})
export class CarouselRowsComponent {
  events: any[] = []; // Array to store fetched events

  sections = [
    {
      title: 'Eventos y Ferias',
      linkLabel: 'Ver todos',
      href: '/eventos-ferias',
    },
    {
      title: 'Capacitación',
      linkLabel: 'Ver todos',
      href: '/capacitaciones',
    },
    {
      title: 'Servicios',
      linkLabel: 'Ver todos',
      href: '/servicios',
    },
    {
      title: 'Exclusivo para Asociados',
      linkLabel: 'Ver todos',
      href: '/asociados',
    },
  ];

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
