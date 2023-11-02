import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { BodyFrontComponent } from './features/components/body-front/body-front.component';
import { BodyBackComponent } from './features/components/body-back/body-back.component';
import { BodyInfoComponent } from './features/components/body-info/body-info.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BodyFrontComponent,
    BodyBackComponent,
    BodyInfoComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
