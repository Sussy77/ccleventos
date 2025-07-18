import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  filter,
} from 'rxjs';
import { EventService } from '../../services/event.service';
import { NgClass, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  imports: [NgClass, RouterLink, UpperCasePipe],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  private _unsubscribeAll$ = new Subject<any>();
  searchTerm: string = '';
  searchResults: any[] = [];
  showResults: boolean = false;

  searchControl = new FormControl('');

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
        // this.filteredData = this.filterData(searchText);
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll$.next(null);
    this._unsubscribeAll$.complete();
  }

  // ------------------------------------------------------------------------------------------
  // @ Public Methods
  // ------------------------------------------------------------------------------------------

  filterData(query: string): any[] | void {
    // if (!query) return this.data;
    // const lowerQuery = query.toLowerCase();
    // return this.data.filter((item) =>
    //   Object.values(item).some((val) =>
    //     val?.toString().toLowerCase().includes(lowerQuery)
    //   )
    // );
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
    this.showResults = true;
    if (this.searchResults.length > 0) {
    }
  }
}
