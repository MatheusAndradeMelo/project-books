import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-books',
  templateUrl: './register-books.component.html',
  styleUrls: ['./register-books.component.scss'],
})
export class RegisterBooksComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publishDate: ['', Validators.required],
    });
  }

  // Método para lidar com o envio do formulário
  onSubmit(): void {
    if (this.bookForm.valid) {
      console.log('Livro cadastrado:', this.bookForm.value);
      // alert(`Livro ${this.bookForm.value.title} cadastrado com sucesso!`);
      this.snackBar.open(
        `Livro ${this.bookForm.value.title} cadastrado com sucesso!`,
        'Fechar',
        { duration: 5000 },
      );

      // Reseta ou recarrega o formulário após o cadastro
      window.location.reload();
      // this.bookForm.reset();
    } else {
      // alert('Por favor, preencha todos os campos.');
      this.snackBar.open(
        'Por favor, preencha todos os campos.',
        'Fechar',
        { duration: 5000 },
      );
    }
  }
}
