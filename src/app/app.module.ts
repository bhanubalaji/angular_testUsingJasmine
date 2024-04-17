import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InputOuputEventEmitterComponent } from './components/input-ouput-event-emitter/input-ouput-event-emitter.component';
import { InputOuputEventEmitter2Component } from './components/input-ouput-event-emitter2/input-ouput-event-emitter2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputOuputEventEmitterComponent,
    InputOuputEventEmitter2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
