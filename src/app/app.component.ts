import { Component } from '@angular/core';
import { DateHelper } from './helpers/date-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcom Rishi!';
  today = DateHelper.getFormattedDate(new Date());
  
  public printPage():void{
    window.print();
  }
}
