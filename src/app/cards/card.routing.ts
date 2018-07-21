import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CardListComponent } from './card-list/card-list.component';
import { RouterModule, Route } from '@angular/router';

const ROUTES:Route[] = [
    {path: '', component: CardListComponent},
    {path: 'form', component: CardFormComponent},
    {path: 'form/:cardId', component: CardFormComponent},    
    {path: 'detail/:cardId', component: CardDetailComponent}
];

export const CARD_ROUTES = RouterModule.forChild(ROUTES);