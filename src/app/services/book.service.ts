import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://restful-booker.herokuapp.com';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/books`).pipe(
      catchError(error => {
        // Se ocorrer um erro ao retornar os livros
        console.error('Erro ao retornar os livros:', error);
        return throwError(() => new Error('Não foi possível carregar os livros. Tente novamente mais tarde.'));
      })
    );
  }
}
