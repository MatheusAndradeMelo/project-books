import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultBooksComponent } from './consult-books.component';

const routes: Routes = [{ path: '', component: ConsultBooksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultBooksRoutingModule { }
