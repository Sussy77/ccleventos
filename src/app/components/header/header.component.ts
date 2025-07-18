import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CommonModule, NgClass } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Subject,
  takeUntil,
} from 'rxjs';
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
