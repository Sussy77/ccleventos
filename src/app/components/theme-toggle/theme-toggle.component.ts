import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="toggleTheme()" class="theme-toggle-button">
      <i class="fas" [class.fa-sun]="(isDarkMode | async) === false" [class.fa-moon]="isDarkMode | async"></i>
    </button>
  `,
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
  private themeService = inject(ThemeService);
  isDarkMode = this.themeService.darkMode;

  constructor() { }

  toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }
}