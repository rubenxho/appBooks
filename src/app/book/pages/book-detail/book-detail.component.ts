import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
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

  constructor(private activateRoute: ActivatedRoute, private bookService: BookService,private location: Location, private authService: AuthService) { }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap((params) => this.bookService.getBook(params['id'],this.authService.user.id_user))
    )
    .subscribe((data: BookJson)=>{
      this.book= data.data[0]
    })
  }

  back(){
    this.location.back();
  }
}
