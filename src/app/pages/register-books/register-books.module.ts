import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterBooksRoutingModule } from './register-books-routing.module';
import { RegisterBooksComponent } from './register-books.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BookFormComponent } from 'src/app/components/book-form/book-form.component';

@NgModule({
  declarations: [
    RegisterBooksComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    RegisterBooksRoutingModule
  ]
})
export class RegisterBooksModule { }
