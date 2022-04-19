import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';

import { AuthJson } from '../../../shared/models/auth-json';
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
    const user: User = this.myForm.value 

    for(let property in user){
      if(user[property]==="" || user[property]===null){
        this.hidden=true;
        return
      }
    }

    this.authService.register(user).subscribe((data: AuthJson)=>{
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
