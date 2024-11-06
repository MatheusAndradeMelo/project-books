import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultBooksRoutingModule } from './consult-books-routing.module';
import { ConsultBooksComponent } from './consult-books.component';

@NgModule({
  declarations: [
    ConsultBooksComponent
  ],
  imports: [
    CommonModule,
    ConsultBooksRoutingModule
  ]
})
export class ConsultBooksModule { }
