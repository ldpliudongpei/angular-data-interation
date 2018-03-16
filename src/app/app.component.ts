import { Component } from '@angular/core';
import { AppService } from './app.service';
// import { SwiperConfigInterface } from 'ngx-swiper-wrapper'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  agreectrl;

  constructor(
    private appService: AppService
  ){

  }



}

