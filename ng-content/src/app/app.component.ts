import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { PosListComponent } from './pos-list/pos-list.component';

@Component({
  selector: 'app-root',
  imports: [CardComponent,PosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-content';
}
