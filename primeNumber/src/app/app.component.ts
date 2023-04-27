import { Component } from '@angular/core';
import { prime } from './models/prime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeNumber';

  primes!: prime[];
  prime: prime = {
    id: 0
  }
  constructor() { }
  isPrime: boolean = false;

  SignIn() {

    if (this.prime.id == 0 || this.prime.id == 1) {
      this.isPrime = false;

    } else {
      for (let i = 2; i <= this.prime.id / 2; i++) {
        if (this.prime.id % i == 0) {
          this.isPrime = false;
          break;
        } else {
          this.isPrime = true;
        }
      }
    }
    console.log(this.prime.id);
    console.log(this.isPrime);
  }
}
