import { MessageService } from './../services/message-service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberValidatorDirective } from '../common/phone-number-validator.directive';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ PhoneNumberValidatorDirective, MessagesComponent],
  exports:[ MessagesComponent, PhoneNumberValidatorDirective ]
})
export class ReusableModule { }
