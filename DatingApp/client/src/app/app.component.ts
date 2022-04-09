import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //vars
  title = 'The Dating App';
  users: any;

  constructor( private accountService: AccountService) {}

  ngOnInit() {

    this.setCurrentUser();
  }

  setCurrentUser(){ //get stringified object from accountservice.ts back and parse to object from local storage
    const user: User = JSON.parse(localStorage.getItem('user')); //user is key in local storage
    this.accountService.setCurrentUser(user);
  }


}
