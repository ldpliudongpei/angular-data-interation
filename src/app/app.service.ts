import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class AppService {
 
  constructor() { }
 
  sub = new Subject<any>();
 
}