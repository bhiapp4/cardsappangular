import { UserService } from './../services/user-service';
import { RoleService } from './../services/role-service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleFormComponent } from './role-form/role-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { USER_ROUTES } from './user.routing';
import { HttpClientModule } from '@angular/common/http';
import { ReusableModule } from '../common/reusable.module';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    USER_ROUTES,
    ReusableModule
  ],
  declarations: [ RoleFormComponent, UserListComponent, UserFormComponent, UserLoginComponent ],
  providers:[ RoleService, UserService]
})
export class UserModule { }
