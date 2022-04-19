import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { BookJson } from '../../models/book-json';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  public event: string="Agregar"
  public hidden: boolean=false;
  public message: string="*El Id Author no existe"

  constructor(private bookService: BookService) {}

  add(book:Book){
    
    this.bookService.postBook(book).subscribe((data:BookJson)=>{
      if(data.error){
        this.hidden=true;
      }
      else{
        this.hidden=false;
      }
    })
  }
}
