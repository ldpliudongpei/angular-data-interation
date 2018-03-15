import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'

@Component({
  selector: 'two-child',
  templateUrl: './two-child.component.html',
  styleUrls: ['./two-child.component.scss']
})
export class TwoChildComponent implements OnInit {

  twoChild;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
  }


  getDate() {
    this.twoChild = this.appService.inputValue;
  }

}
