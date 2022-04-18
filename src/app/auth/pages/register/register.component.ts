import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Author } from '../../../shared/models/author';
import { AuthorJson } from '../../../shared/models/author-json';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  public myForm: FormGroup;
  public hidden: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { 
    this.buildForm()
  }

  register(){
    const author: Author = this.myForm.value 

    for(let property in author){
      if(author[property]==="" || author[property]===null){
        this.hidden=true;
        return
      }
    }

    this.authService.register(author).subscribe((data: AuthorJson)=>{
      if(data.error){
        this.hidden=true;
      }else{
        this.router.navigate(['/login'])
      }
    })
  }

  buildForm(){
    this.myForm = this.formBuilder.group({
      email: "",
      first_name: "",
      last_name: "",
      password:""
    })
  }
}
