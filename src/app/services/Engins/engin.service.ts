import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Engin } from '../../models/engin';


@Injectable({
  providedIn: 'root'
})
export class EnginService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getEnginsByImmatriculation(immatriculation: string): Observable<Engin[]> {
    return this.http.get<Engin[]>(`${this.apiUrl}engins/${immatriculation}`);
  }


  getEngins(): Observable<Engin[]> {
   return this.http.get<Engin[]>(this.apiUrl+"engins");
  }

  getEnginById(id: string): Observable<Engin> {
    return this.http.get<Engin>(`${this.apiUrl}/${id}`);
  }

  createEngin(engin: Engin): Observable<Engin> {
    return this.http.post<Engin>(this.apiUrl+"engins", engin);
  }

  updateEngin(id: string, engin: Engin): Observable<Engin> {
    return this.http.put<Engin>(`${this.apiUrl}/${id}`, engin);
  }

  deleteEngin(id: string): Observable<Engin> {
    return this.http.delete<Engin>(`${this.apiUrl}engins/${id}`);
  }
}
