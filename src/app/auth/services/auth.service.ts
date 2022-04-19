import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User} from '../../shared/models/user';
import { AuthJson } from '../../shared/models/auth-json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url:string = 'http://localhost:3000'
  public isLogged:boolean = false;
  public user: User;

  constructor(private http: HttpClient) { }

  login(user: User): Observable<AuthJson>{
    let url= `${this.url}/login`
    return this.http.post<AuthJson>(url,user)
  }

  register(user: User): Observable<AuthJson>{
    let url= `${this.url}/register`
    return this.http.post<AuthJson>(url,user)
  }

 
}
