import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  private baseUrl = 'http://localhost:5000/api/newsletter';
  _showDialog = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  set showDialog(value: boolean) {
    this._showDialog.next(value);
  }

  get showDialog(): Observable<boolean> {
    return this._showDialog.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public Methods
  // -----------------------------------------------------------------------------------------------------

  subscribe(email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/subscribe`, { email });
  }
}
