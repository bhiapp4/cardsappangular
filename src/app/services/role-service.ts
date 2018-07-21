import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Role } from "../models/role";

@Injectable()
export class RoleService{
   private url:string = "http://localhost:18080/api/roles"

   constructor(private http:HttpClient){}
   
   create(role:Role){
   // console.log(role);
    const httpHeaders = new HttpHeaders().set("content-type","application/json");
    return this.http.post(this.url,JSON.stringify(role),{headers:httpHeaders});
   }

   getAll(){
       return this.http.get(this.url);
   }
}