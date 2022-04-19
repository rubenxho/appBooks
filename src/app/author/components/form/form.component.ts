import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Author } from 'src/app/shared/models/author';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() event: string;
  @Input() hidden: boolean;
  @Input() message: string;
  @Output() formEvent = new EventEmitter<Author>()
  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.buildForm()
  }

  confirm(){
    this.formEvent.emit(this.myForm.value)
  }

  buildForm(){
    this.myForm = this.formBuilder.group({
      id_author: "",
      first_name: "",
      last_name: ""
    })
  }

}
