import { Component } from '@angular/core';
import { user } from './models/user';
import { UserServices } from './services/user-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private userService: UserServices) {
    this.getUsers();
  }
  users!: user[];
  user: user = { id: 0, name: '', email: '' };

  addUser() {
    this.userService.addUser(this.user).subscribe({
      next: (res) => {
        console.log(res);
        this.users.push(this.user);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  private getUsers() {
    this.userService.getUsers().subscribe({
      next: (res) => {
        console.log(res);
        this.users = res;
      },
      error: (err) => console.log(err)
    })
  }

}


