import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultBooksRoutingModule } from './consult-books-routing.module';
import { ConsultBooksComponent } from './consult-books.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ConsultBooksComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    ConsultBooksRoutingModule
  ]
})
export class ConsultBooksModule { }
