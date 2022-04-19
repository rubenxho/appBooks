import { Component } from '@angular/core';
import { Author } from 'src/app/shared/models/author';
import { AuthorJson } from '../../models/author-json';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent{

  public event: string="Modificar"
  public hidden: boolean=false;
  public message: string=""

  constructor(private bookService: AuthorService) { }

  update(author:Author){
    if(Number(author.id_author)===0){
      this.hidden=true;
      this.message="*Introduzca un Id Author"
      return
    }

    this.bookService.updateAuthor(author).subscribe((data:AuthorJson)=>{
      if(data.error || !data.updated){
        this.hidden=true;
        this.message="*El Id Author no existe"
      }
      else{
        this.hidden=false;
      }
    })
  }

}
