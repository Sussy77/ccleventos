import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';
  searchResults: any[] = [];
  showResults: boolean = false;

  constructor(private eventService: EventService) { }

  ngOnInit(): void { }

  onSearchChange(): void {
    if (this.searchTerm.trim() === '') {
      this.searchResults = [];
      this.showResults = false;
      return;
    }

    this.eventService.searchEvents(this.searchTerm).subscribe({
      next: (data) => {
        this.searchResults = data;
        this.showResults = true;
      },
      error: (err) => {
        console.error('Error searching events:', err);
        this.searchResults = [];
        this.showResults = false;
      }
    });
  }

  // Optional: Hide results when clicking outside
  onBlur(): void {
    setTimeout(() => {
      this.showResults = false;
    }, 100);
  }

  onFocus(): void {
    if (this.searchResults.length > 0) {
      this.showResults = true;
    }
  }
}
