import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardListComponent } from './card-list/card-list.component';
import { CardService } from '../services/card-service';
import { VoteComponent } from './vote/vote.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CARD_ROUTES } from './card.routing';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { ReusableModule } from '../common/reusable.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CARD_ROUTES,
    ReusableModule,
    HttpClientModule
  ],
  declarations: [CardListComponent, 
    VoteComponent, CardFormComponent, CardDetailComponent],
  providers:[CardService]
})
export class CardModule { }
