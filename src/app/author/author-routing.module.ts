import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './pages/add-author/add-author.component';
import { AuthorComponent } from './pages/author/author.component';
import { UpdateAuthorComponent } from './pages/update-author/update-author.component';

const routes: Routes = [
  { path: '',
    children:[
      {path:'', component:AuthorComponent},
      {path:'add-author', component:AddAuthorComponent},
      {path:'update-author', component:UpdateAuthorComponent},
      {path:'**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
