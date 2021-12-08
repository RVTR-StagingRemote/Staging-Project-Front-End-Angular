import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _email: string = '';
  _password: string = '';
  _isCredentialsCorrect: boolean = false;
  _isCredentialsIncorrect: boolean = false;
  _isEmpty: boolean = false;

  // For registration page
  user: any = {};
  @Input() userData = { Firstname: '', Lastname: '', Username: '', Email: '', Password: '' };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    // Email and passwords fields are entered
    if (email != "" && password != "") {
      this._isEmpty = false;
      this.userService.login(email, password).subscribe(response => {
        this.resetFields();
        // Successful login
        if (response.success) {
          sessionStorage.setItem('user', JSON.stringify(response.data));
          sessionStorage.setItem('JWT', response.message);
          this.userService.setHeaders();
          this._isCredentialsCorrect = true;
          this._isCredentialsIncorrect = false;
        } 
        // Incorrect email or password
        if (!response.success) {
          this._isCredentialsCorrect = false;
          this._isCredentialsIncorrect = true;
        } 
        // With correct credentials, the page will "load" to the next page in one second
        if (this._isCredentialsCorrect) {
          setTimeout(() => {
            this.router.navigateByUrl('');
          }, 1000);
        }
      })
    } 
    // Email or password fields are empty
    else {
      this._isCredentialsIncorrect = false;
      this._isEmpty = true;
    }

    /* this.userService.login(email, password).subscribe(response => {
      if (response.success) {
        this.user = response.data;
        console.log(this.user);
        sessionStorage.setItem('user', JSON.stringify(this.user));
        sessionStorage.setItem('JWT', response.message);
        this.userService.setHeaders();
        // this.router.navigateByUrl('dashboard');
      } else {
        // alert maybe changed to something else
        alert(response.message);
      }
    }) */
  }

  resetFields() {
    this._email = '';
    this._password = '';
  }

  // For registration page
  editUser(): void {
    this.user.email = this.userData.Email;
    this.user.password = this.userData.Password;

    this.userService.editUser(this.user).subscribe(response => {
      if (response.success) {
        this.user = response.data;
        sessionStorage.setItem('user', JSON.stringify(this.user));
      } else {
        // alert maybe changed to something else
        alert(response.message);
      }
    })
  }


}
