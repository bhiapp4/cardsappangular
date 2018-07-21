import { UserService } from './../../services/user-service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoleService } from '../../services/role-service';
import { Role } from '../../models/role';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../models/user';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cardsapp-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

  userForm:FormGroup;
  roles: Role[];

  constructor(private fb:FormBuilder, private roleService:RoleService, 
    private userService:UserService) { 

  }
 
  ngOnInit() {

    this.roleService.getAll().subscribe(rolesResponse=>{    
      this.roles = rolesResponse as Role[];
    });

    this.userForm = this.fb.group({
      firstName:['',[Validators.required]],
      middleName:[''],
      lastName:['', [Validators.required]],
      userName:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
      address:this.fb.group({
        city:[''],
        state:[''],
        country:[''],
        zip:['']
      }),
      roles:[]
    });
  }

  handleSubmit(){
    //console.log(this.userForm.value);
    const selectedRoles = [];
    const roles = this.userForm.value.roles;
    for(let role of roles){
      selectedRoles.push(role.id);
    }
    this.userForm.value.roles = null;
    this.userService.create(this.userForm.value).subscribe((createdUser:User) =>{
      if(selectedRoles.length > 0){
        this.userService.assignUserToRoles(createdUser.id, selectedRoles).subscribe((response)=>{
          this.userForm.reset();
          alert("user creation successfull");
         },(errorResponse: HttpErrorResponse)=>{
           alert('An error occurred when assigning user to role');
         });  
      }
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
