import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @ViewChild('menuResponsive') menuResponsive:ElementRef;
  public menuDesplegado:Boolean;

  constructor() { }

  desplegarMenu(){
    this.menuResponsive.nativeElement.classList.toggle('mostrar')
    this.menuDesplegado= !this.menuDesplegado;
  }

}
