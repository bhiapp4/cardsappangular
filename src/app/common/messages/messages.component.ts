import { MessageService } from './../../services/message-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cardsapp-messages',
  templateUrl: './messages.component.html',
  styleUrls:['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {
  messages:string[] = [];
  messagesSubscription:Subscription;
  
  constructor(private messageService:MessageService) { }

  ngOnInit() {
    console.log('subscribing to messages subject');
    this.messagesSubscription = this.messageService.getSubject().subscribe((message:string)=>{
      this.messages.push(message);
      setTimeout(()=>{
        this.messages = [];
      },2000)
    });
  }

  ngOnDestroy(){
    console.log('unsubscriving');
    this.messagesSubscription.unsubscribe();
  }


}
