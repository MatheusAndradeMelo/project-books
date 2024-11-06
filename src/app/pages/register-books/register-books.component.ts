import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-books',
  templateUrl: './register-books.component.html',
  styleUrls: ['./register-books.component.scss'],
})
export class RegisterBooksComponent implements OnInit {
  // Declaração do FormGroup
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicialização do FormGroup com FormBuilder e validações
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
      alert(`Livro ${this.bookForm.value.title} cadastrado com sucesso!`);

      // Reseta o formulário após o cadastro
      this.bookForm.reset();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
