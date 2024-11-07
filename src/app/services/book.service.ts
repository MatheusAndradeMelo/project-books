import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IBook } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://restful-booker.herokuapp.com/booking';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.apiUrl}`).pipe(
      catchError(error => {
        // Se ocorrer um erro ao retornar os livros
        console.error('Erro ao retornar os livros:', error);
        return throwError(() => new Error('Não foi possível carregar os livros. Tente novamente mais tarde.'));
      })
    );
  }
}
