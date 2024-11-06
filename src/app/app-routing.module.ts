import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register-books',
    loadChildren: () => import('./pages/register-books/register-books.module').then(m => m.RegisterBooksModule)
  },
  {
    path: 'consult-books',
    loadChildren: () => import('./pages/consult-books/consult-books.module').then(m => m.ConsultBooksModule)
  },
  { path: '', redirectTo: '/register-books', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
