import { Component } from '@angular/core';
import { Author } from 'src/app/shared/models/author';
import { AuthorJson } from '../../models/author-json';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent{

  public event: string="Agregar"

  constructor(private bookService: AuthorService) { }

  add(author: Author){
    this.bookService.postAuthor(author).subscribe((data:AuthorJson)=>{
    })
  }

}
