import { Component, ComponentRef, ViewContainerRef } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { PosListComponent } from './pos-list/pos-list.component';
import { NgComponentOutlet } from '@angular/common'
@Component({
  selector: 'app-root',
  imports: [CardComponent,PosListComponent,NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-content';
  constructor(private viewContainerRef : ViewContainerRef){}

  loadCompoent(){
    return PosListComponent
  }

  loadcompoentbutton(){
    this.viewContainerRef.createComponent(PosListComponent)
  }
  Destroycompoentbutton(){
    this.viewContainerRef.remove();
  }
}
