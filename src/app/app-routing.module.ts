import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path:'login', loadChildren: () => import('./auth/auth.module').then( module => module.AuthModule)},
  { path:'book', 
    loadChildren: () => import('./book/book.module').then(module => module.BookModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  { path:'author', 
    loadChildren: () => import('./author/author.module').then(module => module.AuthorModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  { path:'', redirectTo:'login', pathMatch: 'full'},
  { path:'**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
