import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { BooksComponent } from './pages/books/books.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';

const routes: Routes = [
  { path: '',
    children:[
      {path:'', component:BooksComponent},
      {path:':id', component:BookDetailComponent},
      {path:'add-book', component:AddBookComponent},
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
