import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthJson } from '../../../shared/models/auth-json';
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
    const user: User = this.myForm.value 

    for(let property in user){
      if(user[property]==="" || user[property]===null){
        this.hidden=true;
        this.message= "*Los campos son obligatorios"
        return
      }
    }

    this.authService.login(user).subscribe((data:AuthJson) =>{
      if(data.found === false){
        this.hidden=true;
        this.message= "*Email o contraseña invalida"
      }
      else{
        this.authService.isLogged=true;
        this.authService.user=data.data[0]
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
