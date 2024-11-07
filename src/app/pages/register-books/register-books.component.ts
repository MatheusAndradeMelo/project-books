import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-register-books',
  templateUrl: './register-books.component.html',
  styleUrls: ['./register-books.component.scss'],
})
export class RegisterBooksComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder, 
    private snackBar: MatSnackBar, 
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publishDate: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook: IBook = this.bookForm.value;
      this.bookService.addBook(newBook);

      this.snackBar.open(
        `Livro ${newBook.title} cadastrado com sucesso!`,
        'Fechar',
        { duration: 5000 }
      );
      this.bookForm.reset();
      this.router.navigate(['/consult-books']);
    } else {
      this.snackBar.open('Por favor, preencha todos os campos.', 'Fechar', {
        duration: 5000,
      });
    }
  }
}

