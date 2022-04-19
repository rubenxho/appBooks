import { Component} from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Book } from '../../models/book';
import { BookJson } from '../../models/book-json';
import { BookService } from '../../services/book.service';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent{

  public books: Book[]=[];

  constructor(private bookService: BookService, private authService: AuthService, private favoriteService: FavoriteService) {

    this.bookService.getBooks(this.authService.user.id_user).subscribe((data:BookJson)=>{
      if(data.error){
        this.books=[];
      }
      else{
        this.books=data.data
      }
    })
  }

  getBook(id_book: string){

    if(id_book===""){
      this.bookService.getBooks(this.authService.user.id_user).subscribe((data:BookJson)=>{
        if(data.error){
          this.books=[];
        }
        else{
          this.books=data.data
        }
      })
    }
    else{
      let id = Number(id_book)
      this.bookService.getBook(id,this.authService.user.id_user).subscribe((data:BookJson)=>{
        if(data.error){
          this.books=[];
        }
        else{
          this.books=data.data;
        }
      })
    }
  }

  modify(body:any){
    if(body.boolean){
      this.favoriteService.postFavorites(this.authService.user.id_user, body.id).subscribe((data:BookJson)=>{
      })
    }
    else{
      this.favoriteService.deleteFavorites(body.id).subscribe((data:BookJson)=>{
      })
    }
  }


}
