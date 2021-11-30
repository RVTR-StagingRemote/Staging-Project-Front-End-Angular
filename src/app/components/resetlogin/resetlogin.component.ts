import { Component, Input, OnInit } from '@angular/core';
import { UserRegistrationService } from 'src/app/service/fetch-api-data.service';

@Component({
  selector: 'app-resetlogin',
  templateUrl: './resetlogin.component.html',
  styleUrls: ['./resetlogin.component.css']
})
/*
As a user, I want to be able to reset my login credentials, so that I can log in again if I forget my credentials.
Given:
User has an account made
User forgets username or password
When:
The user clicks a "forgot password" link/button
ThenL
The system will ask for the email associated with the account and send an email to the user with the steps to change the password 

*/
export class ResetloginComponent implements OnInit {

  @Input() userData = { Firstname: '', Lastname: '', Email: '', Password: '' };
  constructor(private fetchapidata: UserRegistrationService) {
  }
  
  //when this is called I need to grab the account. 
  ngOnInit(): void {
    user: this.fetchapidata.userInformation(this.userData);
  }
  resetlogin(): void {
    console.log(this.userData)
  }


}
