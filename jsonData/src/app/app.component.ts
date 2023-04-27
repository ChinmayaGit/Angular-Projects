import { Component, OnDestroy, OnInit } from '@angular/core';
import { Emp } from './models/emp';
import { Notification } from './models/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'jsonData';
  emp!: Emp[];
  notifivation = Notification;
  ShowNotifiactioContent: any;
  constructor() { }
  showTable: boolean = true;

  ngOnInit(): void {

    this.emp = [
      { name: 'Raj', age: 25, dob: new Date(), dep: 1, contact: 1234567890, address: 'Mit/Pune' },
      { name: 'Kaj', age: 25, dob: new Date(), dep: 2, contact: 1233345390, address: 'Mit/Pune' },
      { name: 'Moj', age: 25, dob: new Date(), dep: 4, contact: 1234567890, address: 'Mit/Pune' },
    ];
    const original = this.emp;
    console.log(original);

  }
  Save() {
    this.ShowNotifiactioContent = this.notifivation.Success;
    this.showTable = !this.showTable;
  };

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


}
