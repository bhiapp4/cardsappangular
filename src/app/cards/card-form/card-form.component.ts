import { HttpErrorResponse } from '@angular/common/http';
import { CardService } from '../../services/card-service';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cardsapp-card-form',
  templateUrl: './card-form.component.html',
  styles: []
})
export class CardFormComponent{

  card:Card = null;

  constructor(private cardService: CardService, private router:Router, 
    private activatedRoute: ActivatedRoute) { 
      const cardId = this.activatedRoute.snapshot.params['cardId'];
      if(cardId){
        cardService.getById(parseInt(cardId)).subscribe(response =>{
          this.card = response as Card;
        },(error)=>{
          console.log(error);
          alert('An error occurred when getting the card info');
        });
      }
    }

  handleSubmit(cardForm: NgForm){
    if(this.card != null){
      cardForm.value.id = this.card.id;
      cardForm.value.createdDateTime = this.card.createdDateTime;
      cardForm.value.updatedDateTime = this.card.updatedDateTime;
    }
    this.cardService.save(cardForm.value).subscribe((response)=>{
      this.router.navigate(['cards']);
    },(errorResponse: HttpErrorResponse)=>{
      if(errorResponse.status === 400){
        const errors:Array<string> = errorResponse.error;
        let message = "";
        for(let e of errors){
          message+= e+"\n";
        }
        alert(message);
      }else{
        console.log(errorResponse);
        alert('An error occurred when performing card save');
      }
    });
  }

}
