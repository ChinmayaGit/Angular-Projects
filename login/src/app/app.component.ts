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
  user: user = { id: 0, name: '', email: '', password: '' };

  showInfo: boolean = false;
  SignUp() {
    this.userService.SignUp(this.user).subscribe({
      next: (res) => {
        this.users.push(this.user);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  SignIn() {
    this.userService.SignUp(this.user).subscribe(
      res => {
        for (let i = 0; i < this.users.length; i++) {
          if (this.user.email == this.users[i].email) {
            console.log("user already exist");
            this.showInfo = true;
            i = this.users.length;
          } else {
            this.showInfo = false;
            console.log("user not exist");
          }
        }
      }, error => {
        console.log(error);
      }

    )
  }

  Save() {
    this.showInfo = !this.showInfo;
  };
  private getUsers() {
    this.userService.getUsers().subscribe({
      next: (res) => {
        // console.log(res);
        this.users = res;
      },
      error: (err) => console.log(err)
    })
  }

}


