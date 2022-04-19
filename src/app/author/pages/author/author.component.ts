import { Component } from '@angular/core';
import { Author } from 'src/app/shared/models/author';
import { AuthorJson } from '../../models/author-json';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent{

  public authors: Author[]=[];

  constructor(private authorService: AuthorService) {

    this.authorService.getAuthors().subscribe((data:AuthorJson)=>{
      if(data.error){
        this.authors=[];
      }
      else{
        this.authors=data.data
      }
    })
  }

  getAuthor(id_author: string){

    if(id_author===""){
      this.authorService.getAuthors().subscribe((data:AuthorJson)=>{
        if(data.error){
          this.authors=[];
        }
        else{
          this.authors=data.data
        }
      })
    }
    else{
      let id = Number(id_author)
      this.authorService.getAuthor(id).subscribe((data:AuthorJson)=>{
        if(data.error){
          this.authors=[];
        }
        else{
          this.authors=data.data;
        }
      })
    }
  } 

}
