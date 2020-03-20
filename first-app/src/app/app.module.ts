import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home/home-component/home-component.component';
import { LogginComponentComponent } from './loggin/loggin-component/loggin-component.component';
import { PhotoVideoComponentComponent } from './media/photo-video-component/photo-video-component.component';
import { CodeComponentComponent } from './code/code-component/code-component.component';
import { AboutComponentComponent } from './about/about-component/about-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    LogginComponentComponent,
    PhotoVideoComponentComponent,
    CodeComponentComponent,
    AboutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
