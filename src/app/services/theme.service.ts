import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _darkMode = new BehaviorSubject<boolean>(false);
  public readonly darkMode: Observable<boolean> = this._darkMode.asObservable();

  constructor() {
    // Initialize theme from local storage or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this._darkMode.next(savedTheme === 'dark');
    } else {
      // Check user's system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this._darkMode.next(prefersDark);
    }
    this.applyTheme();
  }

  toggleDarkMode(): void {
    this._darkMode.next(!this._darkMode.value);
    this.applyTheme();
  }

  private applyTheme(): void {
    if (this._darkMode.value) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }
}