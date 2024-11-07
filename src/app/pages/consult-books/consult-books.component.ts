import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { catchError, firstValueFrom, Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IBook } from 'src/app/models/book';

@Component({
  selector: 'app-consult-books',
  templateUrl: './consult-books.component.html',
  styleUrls: ['./consult-books.component.scss'],
})
export class ConsultBooksComponent implements OnInit {
  books$!: Observable<IBook[]>;
  errorMessage: string = '';

  booksMocks = [
    { title: 'Livro 1', author: 'Autor 1', publishDate: '2022-01-01' },
    { title: 'Livro 2', author: 'Autor 2', publishDate: '2021-12-10' },
    { title: 'Livro 3', author: 'Autor 3', publishDate: '2021-12-10' },
    { title: 'Livro 4', author: 'Autor 4', publishDate: '2021-12-10' },
    { title: 'Livro 5', author: 'Autor 5', publishDate: '2021-12-10' },
  ];

  constructor(
    private bookService: BookService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // Carrega os livros mockados ao invés de fazer uma chamada ao serviço
    this.books$ = of(this.booksMocks).pipe(
      catchError((error) => {
        // Em caso de erro, exibe mensagem e retorna o mock de livros
        this.errorMessage = error.message;
        this.snackBar.open(
          'Erro ao carregar livros. Exibindo lista mock.',
          'Fechar',
          { duration: 3000 }
        );
        return of(this.booksMocks);
      })
    );
  }

  // ngOnInit(): void {
  //   this.books$ = this.bookService.getBooks().pipe(
  //     catchError((error) => {
  //       // Ação em caso de erro (exibir mensagem no console e com SnackBar)
  //       this.errorMessage = error.message;
  //       this.snackBar.open(
  //         'Erro ao carregar livros. Tente novamente mais tarde.',
  //         'Fechar',
  //         { duration: 3000 }
  //       );
  //       return []; // Retorna um array vazio caso ocorra erro
  //     })
  //   );
  // }
}
