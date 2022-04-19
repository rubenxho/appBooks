import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Author } from '../../../shared/models/author';
import { AuthorJson } from '../../../shared/models/author-json';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public myForm: FormGroup;
  public hidden: boolean = false;
  public message: string= "";

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { 
    this.buildForm()
  }

  login(){
    const author: Author = this.myForm.value 

    for(let property in author){
      if(author[property]==="" || author[property]===null){
        this.hidden=true;
        this.message= "*Los campos son obligatorios"
        return
      }
    }

    this.authService.login(author).subscribe((data:AuthorJson) =>{
      if(data.found === false){
        this.hidden=true;
        this.message= "*Invalid password or email"
      }
      else{
        this.authService.isLogged=true;
        this.authService.author=data.data[0]
          this.router.navigate(['/book']) 
      }
    })

  }

  buildForm(){
    this.myForm = this.formBuilder.group({
      email: "",
      password:""
    })
  }

}
