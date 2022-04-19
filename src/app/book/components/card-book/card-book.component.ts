import { Component, Input} from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.css']
})
export class CardBookComponent{

  @Input() book: Book;

  constructor() { }

}
