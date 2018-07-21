import { MessageService } from './../../services/message-service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role-service';
import { Role } from '../../models/role';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'cardsapp-role-form',
  templateUrl: './role-form.component.html'
})
export class RoleFormComponent {

  constructor(private roleService: RoleService, private messageService:MessageService) { }

  handleSubmit(roleForm:NgForm){
    this.roleService.create(roleForm.value).subscribe((createdRole:Role)=>{
     // alert(`Role with name ${createdRole.name} has been created`);
      roleForm.reset();
      this.messageService.addMessage(`Role with name ${createdRole.name} has been created`);
    },(errorResponse: HttpErrorResponse)=>{
      if(errorResponse.status === 400){
       const errors:Array<string> = errorResponse.error;
       let message = "";
       for(let e of errors){
         message+= e+"\n";
       }
       alert(message);
      }
    });
  }

}
