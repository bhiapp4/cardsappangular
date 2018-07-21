import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { RoleFormComponent } from './role-form/role-form.component';
import { RouterModule, Route } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthorizationGuard } from '../guards/auth.guard';

const ROUTES:Route[] = [
    {path: '', component: UserListComponent, canActivate:[AuthorizationGuard]},
    {path: 'login', component: UserLoginComponent},
    {path: 'form', component: UserFormComponent},
    {path:'roleForm', component: RoleFormComponent, canActivate:[AuthorizationGuard]}
];

export const USER_ROUTES = RouterModule.forChild(ROUTES);