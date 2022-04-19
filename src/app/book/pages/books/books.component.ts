import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookJson } from '../../models/book-json';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books: Book[]=[];

  constructor(private bookService: BookService) {

    this.bookService.getBooks().subscribe((data:BookJson)=>{
      if(data.error){
        this.books=[];
      }
      else{
        this.books=data.data
      }
    })
  }

  getBook(id_book: string){
    let id = Number(id_book)
    this.bookService.getBook(id).subscribe((data:BookJson)=>{
      if(data.error){
        this.books=[];
      }
      else{
        this.books=data.data;
      }
    })
  }

  ngOnInit(): void {
  }

}
