import { AuthorizationGuard } from './guards/auth.guard';
import { RouterModule, Route } from '@angular/router';

const ROUTES:Route[] = [
    {path: 'cards', loadChildren:'src/app/cards/card.module#CardModule',
        canActivate:[AuthorizationGuard]},
    {path: 'users', loadChildren:'src/app/user/user.module#UserModule'},
    {path: '', redirectTo: 'users/login', pathMatch:'full'}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);