import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Mypages/landing-page/landing-page.component';
import { Mylandingpage2Component } from './Mypages/mylandingpage2/mylandingpage2.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    Mylandingpage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
