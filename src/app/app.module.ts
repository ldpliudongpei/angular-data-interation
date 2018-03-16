import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service'

import { AppComponent } from './app.component';
import { OneChildComponent } from './one-child/one-child.component';
import { TwoChildComponent } from './two-child/two-child.component';




@NgModule({
  declarations: [
    AppComponent,
    OneChildComponent,
    TwoChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    AppService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
