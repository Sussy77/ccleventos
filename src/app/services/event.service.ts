import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'https://api.ccleventos.pe/api/Evento/obtener/eventos'; // URL de tu backend

  constructor(private http: HttpClient) { }

  searchEvents(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?q=${query}`);
  }

  getAllEventos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
