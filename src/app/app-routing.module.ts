import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputOuputEventEmitterComponent } from './components/input-ouput-event-emitter/input-ouput-event-emitter.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent},
    {path:'input-ouput', component:InputOuputEventEmitterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
