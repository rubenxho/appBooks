import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/shared/models/author';
import { AuthorJson } from '../models/author-json';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private url:string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<AuthorJson>{
    let url= `${this.url}/authors`
    return this.http.get<AuthorJson>(url)
  }

  getAuthor(id_author: number): Observable<AuthorJson>{
    let url= `${this.url}/author/${id_author}`
    return this.http.get<AuthorJson>(url)
  }

  postAuthor(author:Author): Observable<AuthorJson>{
    let url= `${this.url}/author`
    return this.http.post<AuthorJson>(url,author)
  }

  updateAuthor(author: Author): Observable<AuthorJson>{
    let url= `${this.url}/author/${author.id_author}`
    return this.http.put<AuthorJson>(url,author)
  }
}
