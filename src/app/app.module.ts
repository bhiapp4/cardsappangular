import { MessageService } from './services/message-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { APP_ROUTES } from './app.routing';
import { ReusableModule } from './common/reusable.module';
import { AuthorizationGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    ReusableModule
  ],
  providers: [ MessageService, AuthorizationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
