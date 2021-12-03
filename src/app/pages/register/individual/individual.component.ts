import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {

  @Input() userData = {Firstname: '', Lastname: '', Username: '', Email: '', Password: '', Field: '', Years: '', CurrentTitle: '' };

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(): void {
    console.log(this.userData);
    alert("Registration complete!")
  }

}
