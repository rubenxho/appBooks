import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '../../models/book';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() event: string;
  @Input() hidden: boolean;
  @Input() message: string;
  @Output() formEvent = new EventEmitter<Book>()
  public myForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder) { 
    this.buildForm()
  }

  confirm(){
    this.formEvent.emit(this.myForm.value)
  }

  buildForm(){
    this.myForm = this.formBuilder.group({
      id_book:"",
      id_author: "",
      name: "",
      isbn: "",
      image:""
    })
  }

}
