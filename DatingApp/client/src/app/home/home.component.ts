import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;


  constructor() { }

  ngOnInit(): void {

  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  // getUsers() { //get back an array of users as response from api and were setting the users var in this class to the array of users
  //   this.http.get('https://localhost:5001/api/users').subscribe(users => this.users = users); //this.users is class var. calling response array "users"
  // }

  cancelRegisterMode(event:boolean){
    this.registerMode = event;
  }

}
