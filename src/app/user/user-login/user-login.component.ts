import { MessageService } from './../../services/message-service';
import { Router } from '@angular/router';
import { UserService } from './../../services/user-service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cardsapp-user-login',
  templateUrl: './user-login.component.html'
})
export class UserLoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router, private messageService:MessageService) { }

  ngOnInit() {
  }

  handleSubmit(loginForm:NgForm){
    if(this.userService.checkCredentials(loginForm.value)){
      this.router.navigate(["cards"]);
    }else{
      this.messageService.addMessage("Login Failed - Please check your credentials");
    }

  }

}
