import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { CardBookComponent } from './components/card-book/card-book.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { ImagePipe } from './pipes/image.pipe';


@NgModule({
  declarations: [
    BooksComponent,
    AddBookComponent,
    UpdateBookComponent,
    CardBookComponent,
    BookDetailComponent,
    FormComponent,
    FavoriteComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
