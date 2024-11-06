import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterBooksComponent } from './pages/register-books/register-books.component';
import { ConsultBooksComponent } from './pages/consult-books/consult-books.component';

const routes: Routes = [
  { path: 'register-books', component: RegisterBooksComponent },
  { path: 'consult-books', component: ConsultBooksComponent },
  { path: '', redirectTo: '/register-books', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
