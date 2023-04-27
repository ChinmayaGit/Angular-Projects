import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.getData().subscribe(res => {
      console.log(res);
      // this.propertyTwo = [
      //   res
      // ];
    }, error => {
      console.log(error);
    }

    );

  }
}
