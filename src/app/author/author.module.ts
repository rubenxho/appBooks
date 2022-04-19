import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './pages/author/author.component';
import { AddAuthorComponent } from './pages/add-author/add-author.component';
import { UpdateAuthorComponent } from './pages/update-author/update-author.component';
import { CardAuthorComponent } from './components/card-author/card-author.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthorComponent,
    AddAuthorComponent,
    UpdateAuthorComponent,
    CardAuthorComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthorModule { }
