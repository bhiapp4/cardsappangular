import { CardService } from '../../services/card-service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../models/card';

@Component({
  selector: 'cardsapp-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent{
  card:Card =null;
  
  constructor(private activatedRoute: ActivatedRoute, 
      private cardService:CardService) { 
    cardService.getById(parseInt(activatedRoute.snapshot.params['cardId'])).subscribe((response)=>{
      this.card = response as Card;
    });
  }

  displayDate(datearr){
    return new Date(datearr[0],datearr[1],datearr[2],datearr[3],datearr[4],datearr[5]);
  }

}
