import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Book } from '../../models/book';
import { BookJson } from '../../models/book-json';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent{

  public books: Book[]=[];

  constructor(private favoriteService: FavoriteService, private authService: AuthService) {
    let id_user = this.authService.user.id_user;
    this.favoriteService.getFavorites(id_user).subscribe((data:BookJson)=>{
      if(data.error){
        this.books=[];
      }
      else{
        this.books=data.data;
      }
    })
  }

  modify(body:any){
    if(body.boolean){
      this.favoriteService.postFavorites(this.authService.user.id_user, body.id).subscribe((data:BookJson)=>{
      })
    }
    else{
      this.favoriteService.deleteFavorites(body.id).subscribe((data:BookJson)=>{
        let booksFilter= this.books.filter((value)=>{
          return value.id_favorite != body.id;
        })

        this.books= booksFilter;
      })
    }
  }

}
