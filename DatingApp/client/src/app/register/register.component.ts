import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //@Input() usersFromHomeComponent: any; // for receiving data from parent
  @Output() cancelRegister = new EventEmitter(); //for sending data to parent
  model: any = {};

  constructor(private accountService: AccountService) { } //inject account service into this component

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
