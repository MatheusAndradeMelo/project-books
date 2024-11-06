import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterBooksComponent } from './register-books.component';

const routes: Routes = [{ path: '', component: RegisterBooksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterBooksRoutingModule { }
