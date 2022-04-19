import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { BooksComponent } from './pages/books/books.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';

const routes: Routes = [
  { path: '',
    children:[
      {path:'', component:BooksComponent},
      {path:'add-book', component:AddBookComponent},
      {path:'detail/:id', component:BookDetailComponent},
      {path:'favorite', component:FavoriteComponent},
      {path:'update-book', component:UpdateBookComponent},
      {path:'**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
