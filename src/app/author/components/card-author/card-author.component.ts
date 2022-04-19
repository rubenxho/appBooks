import { Component, Input} from '@angular/core';
import { Author } from 'src/app/shared/models/author';

@Component({
  selector: 'app-card-author',
  templateUrl: './card-author.component.html',
  styleUrls: ['./card-author.component.css']
})
export class CardAuthorComponent {

  @Input() author:Author; 

  constructor() { }


}
