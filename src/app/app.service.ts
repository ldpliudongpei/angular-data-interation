import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppService {

  private inputData: string;

  constructor() { }

  set inputValue(value) {
    this.inputData = value;
  }

  get inputValue() {
    return this.inputData;
  }

}

