import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Author } from '../../shared/models/author';
import { AuthorJson } from '../../shared/models/author-json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url:string = 'http://localhost:3000'
  public isLogged:boolean = false;
  public author: Author;

  constructor(private http: HttpClient) { }

  login(author: Author): Observable<AuthorJson>{
    let url= `${this.url}/login`
    return this.http.post<AuthorJson>(url,author)
  }

  register(author: Author): Observable<AuthorJson>{
    let url= `${this.url}/author`
    return this.http.post<AuthorJson>(url,author)
  }

 
}
