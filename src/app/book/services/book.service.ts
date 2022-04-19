import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookJson } from '../models/book-json';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url:string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getBooks(): Observable<BookJson>{
    let url= `${this.url}/books`
    return this.http.get<BookJson>(url)
  }

  getBook(id_book: number): Observable<BookJson>{
    let url= `${this.url}/book/${id_book}`
    return this.http.get<BookJson>(url)
  }
}
