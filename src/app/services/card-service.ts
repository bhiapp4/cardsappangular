import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../models/card';
import { Injectable } from '@angular/core';

@Injectable()
export class CardService{
    private url:string = "http://localhost:18080/api/cards";

    constructor(private http:HttpClient){}

    public getCards(){
        return this.http.get(this.url);
    }

    save(card:Card){
       const httpHeaders:HttpHeaders = new HttpHeaders().set('content-type',"application/json");

       if(card.id){
           return this.http.put(this.url,JSON.stringify(card),{headers:httpHeaders});
       }
       return this.http.post(this.url,JSON.stringify(card),{headers:httpHeaders});
    }

    getById(id:number){
        return this.http.get(this.url+"/"+id);
    }

    updateVoteCount(cardId, voteCount){
        return this.http.put(`${this.url}/${cardId}/${voteCount}`, null);
    }

}