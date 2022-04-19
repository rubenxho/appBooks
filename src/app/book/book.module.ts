import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { CardBookComponent } from './components/card-book/card-book.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';


@NgModule({
  declarations: [
    BooksComponent,
    AddBookComponent,
    UpdateBookComponent,
    CardBookComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
