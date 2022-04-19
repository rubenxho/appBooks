import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login', loadChildren: () => import('./auth/auth.module').then( module => module.AuthModule)},
  {path:'book', loadChildren: () => import('./book/book.module').then(module => module.BookModule)},
  {path:'**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
