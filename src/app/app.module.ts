import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InputOuputEventEmitterComponent } from './components/input-ouput-event-emitter/input-ouput-event-emitter.component';
import { InputOuputEventEmitter2Component } from './components/input-ouput-event-emitter2/input-ouput-event-emitter2.component';
import { TestbedNativeDebugComponent } from './components/testbed-native-debug/testbed-native-debug.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputOuputEventEmitterComponent,
    InputOuputEventEmitter2Component,
    TestbedNativeDebugComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
