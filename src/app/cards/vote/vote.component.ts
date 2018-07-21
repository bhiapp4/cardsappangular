import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cardsapp-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent{

  private myVote:string = null;

  @Input()
  upVoteCount:number;

  private initialVoteCount:number;

  @Output()
  upVoteCountChanged:EventEmitter<number> = new EventEmitter<number>();

  upVote(){
    if(this.myVote === null){
      this.initialVoteCount = this.upVoteCount;
    }
    if((this.myVote === 'Down') || 
    (this.myVote === 'Up' && (this.upVoteCount === this.initialVoteCount))){
      this.upVoteCount += 1;
    }
    this.myVote="Up";   
    this.upVoteCountChanged.emit(this.upVoteCount);
     
  }

  downVote(){
    if(this.myVote === null){
      this.initialVoteCount = this.upVoteCount;
      this.upVoteCount -= 1;
    }

    if((this.myVote === 'Up') ||(
      this.myVote === 'Down' && (this.upVoteCount === this.initialVoteCount))){
      this.upVoteCount -= 1;
    }
    
    this.myVote="Down";
    this.upVoteCountChanged.emit(this.upVoteCount);
     
  }

  vote(type){
    if(this.myVote === null){
      this.initialVoteCount = this.upVoteCount;
    }
    if((this.myVote === null || this.myVote !== type) ||
        (this.myVote === type && (this.upVoteCount === this.initialVoteCount))){
      this.upVoteCount = (type === 'Up') ? ++this.upVoteCount : --this.upVoteCount;
    }
    this.myVote = type;
    this.upVoteCountChanged.emit(this.upVoteCount);
  }
  
  

}
