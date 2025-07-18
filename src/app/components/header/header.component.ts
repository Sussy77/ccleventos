import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { RouterLink } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ThemeToggleComponent,
    NgClass,
    RouterLink,
    SearchBarComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private eventService: EventService) {}

  // ------------------------------------------------------------------------------------------
  // @ LifeCycle Hooks
  // ------------------------------------------------------------------------------------------

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  // ------------------------------------------------------------------------------------------
  // @ Public Methods
  // ------------------------------------------------------------------------------------------
}
