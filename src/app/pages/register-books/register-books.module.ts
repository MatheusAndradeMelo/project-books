import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterBooksRoutingModule } from './register-books-routing.module';
import { RegisterBooksComponent } from './register-books.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    RegisterBooksComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RegisterBooksRoutingModule
  ]
})
export class RegisterBooksModule { }
