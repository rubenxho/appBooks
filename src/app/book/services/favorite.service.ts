import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookJson } from '../models/book-json';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private url:string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getFavorites(user: number): Observable<BookJson>{
    let url= `${this.url}/favorite/${user}`
    return this.http.get<BookJson>(url)
  }

  postFavorites(id_user:number, id_book:number):Observable<BookJson>{
    let url= `${this.url}/favorite/`
    let body= { id_user: id_user,
                id_book: id_book
              }
    return this.http.post<BookJson>(url,body)
  }

  deleteFavorites(id_favorite:number):Observable<BookJson>{
    let url= `${this.url}/favorite/${id_favorite}`
    return this.http.delete<BookJson>(url)
  }
}
