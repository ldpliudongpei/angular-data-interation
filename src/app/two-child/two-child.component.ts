import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'
  
@Component({
  selector: 'two-child',
  templateUrl: './two-child.component.html',
  styleUrls: ['./two-child.component.scss']
})
export class TwoChildComponent implements OnInit {
  
  value;
  constructor(
    private appService: AppService
  ) { }
  
  ngOnInit() {
    this.appService.sub.subscribe(res => {
      this.value = res;
      console.log("two-child: " + res);
    })
  }
}