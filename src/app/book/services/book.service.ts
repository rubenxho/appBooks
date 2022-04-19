import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { BookJson } from '../models/book-json';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url:string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getBooks(id_user:number): Observable<BookJson>{
    let url= `${this.url}/books/${id_user}`
    return this.http.get<BookJson>(url)
  }

  getBook(id_book: number, id_user:number): Observable<BookJson>{
    let url= `${this.url}/book/${id_book}/${id_user}`
    return this.http.get<BookJson>(url)
  }

  postBook(book: Book): Observable<BookJson>{
    let url= `${this.url}/book`
    return this.http.post<BookJson>(url,book)
  }

  updateBook(book:Book): Observable<BookJson>{
    let url= `${this.url}/book/${book.id_book}`
    return this.http.put<BookJson>(url,book)
  }

}
