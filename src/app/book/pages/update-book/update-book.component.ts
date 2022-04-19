import { Component} from '@angular/core';
import { Book } from '../../models/book';
import { BookJson } from '../../models/book-json';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent{

  public event: string="Modificar"
  public hidden: boolean=false;
  public message: string=""

  constructor(private bookService: BookService) { }

  update(book:Book){
    if(Number(book.id_book)===0){
      this.hidden=true;
      this.message="*Introduzca un Id Book"
      return
    }

    this.bookService.updateBook(book).subscribe((data:BookJson)=>{
      if(data.error){
        this.hidden=true;
        this.message="*El Id Author no existe"
      }
      else if(data.updated===false){
        this.hidden=true;
        this.message="*El Id Book no existe"
      }
      else{
        this.hidden=false;
      }
    })
  }

}
