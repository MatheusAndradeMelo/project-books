import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { catchError, firstValueFrom, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-consult-books',
  templateUrl: './consult-books.component.html',
  styleUrls: ['./consult-books.component.scss'],
})
export class ConsultBooksComponent implements OnInit {
  books$!: Observable<any[]>;
  errorMessage: string = '';

  constructor(
    private bookService: BookService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks().pipe(
      catchError((error) => {
        // Ação em caso de erro (exibir mensagem no console e com SnackBar)
        this.errorMessage = error.message;
        this.snackBar.open(
          'Erro ao carregar livros. Tente novamente mais tarde.',
          'Fechar',
          { duration: 3000 }
        );
        return []; // Retorna um array vazio caso ocorra erro
      })
    );
  }
}
