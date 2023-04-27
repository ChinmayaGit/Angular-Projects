import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  property: any[] = [];
  xyzProperty: any[] = [];
  constructor() { }

  ngOnInit() {
    this.property = [
      { name: 'John', cost: 1 },
      { name: 'Doe', cost: 2 },
      { name: 'Smith', cost: 3 },
    ];
    this.xyzProperty = [
      { name: 'xyz', cost: 1 },
      { name: 'gsha', cost: 2 },
      { name: 'sad', cost: 3 },
    ];
  }

}


