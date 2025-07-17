import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private baseUrl = 'http://localhost:5000/api/newsletter'; // URL de tu backend

  constructor(private http: HttpClient) { }

  subscribe(email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/subscribe`, { email });
  }
}