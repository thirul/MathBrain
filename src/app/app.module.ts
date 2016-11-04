import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MissingNumberComponent } from './components/missing-number/missing-number.component';
import { OrderNumberComponent } from './components/order-number/order-number.component';
import { AdditionNumberComponent } from './components/addition-number/addition-number.component';
import { SubtractNumberComponent } from './components/subtract-number/subtract-number.component';
import { OddEvenNumberComponent } from './components/odd-even-number/odd-even-number.component';
import { OrderbyNumberComponent } from './components/orderby-number/orderby-number.component';

@NgModule({
  declarations: [
    AppComponent,
    MissingNumberComponent,
    OrderNumberComponent,
    AdditionNumberComponent,
    SubtractNumberComponent,
    OddEvenNumberComponent,
    OrderbyNumberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
