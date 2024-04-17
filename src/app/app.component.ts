import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'testPrac';
  constructor(private httpService: HttpService){}
  multiply(x: number, y: number): any {
    return x * y;
  }

  callService(){
    this.httpService.exampleService()
  }
}
