import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { User } from '../models/user';

@Injectable()
export class UserService{
    private url:string = "http://localhost:18080/api/users";
    constructor(private http:HttpClient){}

    create(user:User){
        const httpHeaders = new HttpHeaders().set('content-type','application/json');
        return this.http.post(this.url,JSON.stringify(user),{headers:httpHeaders});
    }

    assignUserToRoles(userId, roleIds){
        const httpHeaders = new HttpHeaders().set('content-type','application/json');
        return this.http.put(this.url+"/"+userId,JSON.stringify(roleIds),{headers:httpHeaders});
    }

    checkCredentials(user){
        if(user.username === 'admin@test.com' && user.password === 'admin1234'){
            sessionStorage.setItem("userLoggedIn", "true");
            return true;
        }
        return false;
    }

}