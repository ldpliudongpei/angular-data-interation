import { Component } from '@angular/core';
import { AppService } from '../app.service'
 
@Component({
  selector: 'one-child',
  templateUrl: './one-child.component.html',
  styleUrls: ['./one-child.component.scss']
})
export class OneChildComponent {
 
  constructor(
    private appService: AppService
  ) { }
 
  sendText(value) {
    console.log("one-child:" + value);
    this.appService.sub.next(value);
  }
 
}