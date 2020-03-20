import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home/home-component/home-component.component';
import { LogginComponentComponent } from './loggin/loggin-component/loggin-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    LogginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
