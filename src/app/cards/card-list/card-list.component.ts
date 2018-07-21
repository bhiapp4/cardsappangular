import { HttpErrorResponse } from '@angular/common/http';
import { CardService } from '../../services/card-service';
import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { Router } from '@angular/router';

@Component({
  selector: 'cardsapp-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit{

  cards:Card[];

  constructor(private cardService:CardService, private router:Router) { }

  ngOnInit(){
    this.cardService.getCards().subscribe(cards => {
      this.cards = cards as Card[];
    },(error)=> {
      console.log(error);
      alert('An error occurred when getting cards');
    });
  }

  edit(cardId:number){
    this.router.navigate(['/cards/form',cardId]);
  }

  updateCardWithUpCount(card:Card,voteCount:number){
    if(card.upVoteCount != voteCount && (voteCount >= 0)){
      this.cardService.updateVoteCount(card.id, voteCount).subscribe((response)=>{
        card.upVoteCount = voteCount;
      },(error:HttpErrorResponse)=>{
        console.log(error);
        alert("An error occurred when updating vote count");
      });  
    }
  }

}
