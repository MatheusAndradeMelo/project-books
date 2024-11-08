import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBook } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksMocks: IBook[] = [
    { title: 'Livro 1', author: 'Autor 1', publishDate: '2022-01-01' },
    { title: 'Livro 2', author: 'Autor 2', publishDate: '2021-12-10' },
  ];
  // link metodo get da api de livros
  // private apiUrl = 'https://restful-booker.herokuapp.com/booking';

  // BehaviorSubject para controlar a lista de livros
  private booksSubject = new BehaviorSubject<IBook[]>(this.booksMocks);

  constructor() {}

  getBooks(): Observable<IBook[]> {
    return this.booksSubject.asObservable();
  }

  // // get de livros pela api
  // getBooks(): Observable<IBook[]> {
  //   return this.http.get<IBook[]>(`${this.apiUrl}`).pipe(
  //     catchError(error => {
  //       // Se ocorrer um erro ao retornar os livros
  //       console.error('Erro ao retornar os livros:', error);
  //       return throwError(() => new Error('Não foi possível carregar os livros. Tente novamente mais tarde.'));
  //     })
  //   );
  // }

  addBook(book: IBook): void {
    this.booksMocks.push(book);
    this.booksSubject.next(this.booksMocks); // Atualiza o BehaviorSubject
  }
}
