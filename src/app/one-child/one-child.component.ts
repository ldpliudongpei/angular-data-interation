import { Component } from '@angular/core';
import { AppService } from '../app.service'

@Component({
  selector: 'one-child',
  templateUrl: './one-child.component.html',
  styleUrls: ['./one-child.component.scss']
})
export class OneChildComponent {

  oneChild;
  constructor(
    private appService: AppService
  ) { }

  saveDate() {
    this.appService.inputValue = this.oneChild;
  }

}
