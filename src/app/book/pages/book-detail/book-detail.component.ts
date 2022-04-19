import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Book } from '../../models/book';
import { BookJson } from '../../models/book-json';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  public book: Book;

  constructor(private activateRoute: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap((params) => this.bookService.getBook(params['id']))
    )
    .subscribe((data: BookJson)=>{
      this.book= data.data[0]
    })
  }

  back(){
    this.router.navigate(['/book'])
  }
}
