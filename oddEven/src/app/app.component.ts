import { Component, OnInit } from '@angular/core';
import { numbers } from './modules/number';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oddEven';
  number: numbers = {
    id: 0
  }
  constructor() { }

  oddEven() {
    if (this.number.id & 1) {
      console.log("Odd");
    } else {
      console.log("Even");
    }
  }
}
