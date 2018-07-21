import { CanActivate, Router } from "@angular/router";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class AuthorizationGuard implements CanActivate{
    constructor(private router:Router){}

    canActivate():boolean{
        if(!sessionStorage.getItem("userLoggedIn")){
            this.router.navigate(['/users/login']);
            return false;
        }
        return true;
    }
}