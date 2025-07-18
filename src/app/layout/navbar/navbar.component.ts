import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Subject,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule, ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private _unsubscribeAll$ = new Subject<void>();
  searchTerm: string = '';
  searchResults: any[] = [];
  showResults: boolean = false;

  searchControl = new FormControl('');
  data = [
    { name: 'Juan', city: 'Bogotá', age: 25 },
    { name: 'Ana', city: 'Lima', age: 30 },
    { name: 'Luis', city: 'Quito', age: 28 },
    { name: 'Maria', city: 'Caracas', age: 22 },
  ];

  filteredData = [...this.data];

  constructor(private eventService: EventService) {}

  // ------------------------------------------------------------------------------------------
  // @ LifeCycle Hooks
  // ------------------------------------------------------------------------------------------

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this._unsubscribeAll$),
        filter((res) => res !== null)
      )
      .subscribe((searchText) => {
        this.filteredData = this.filterData(searchText);
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll$.next();
    this._unsubscribeAll$.complete();
  }

  // ------------------------------------------------------------------------------------------
  // @ Public Methods
  // ------------------------------------------------------------------------------------------

  filterData(query: string): any[] {
    if (!query) return this.data;

    const lowerQuery = query.toLowerCase();
    return this.data.filter((item) =>
      Object.values(item).some((val) =>
        val?.toString().toLowerCase().includes(lowerQuery)
      )
    );
  }

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
      },
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
