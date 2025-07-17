import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'eventos/:id', component: EventDetailComponent },
];
