import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Book } from '../../models/book';


@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.css']
})
export class CardBookComponent{

  @Input() book: Book;
  @Output() modifyEvent = new EventEmitter<any>()
  public bool:boolean;

  constructor() { 
  }

  modify(boolean: boolean, id: number){
    let body = { boolean: boolean, id: id};
    this.book.favorite = !this.book.favorite;
    this.modifyEvent.emit(body)
  }
}
