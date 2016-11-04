import { Component, OnInit } from '@angular/core';
import { MathNumberService } from '../../services/math-number.service';
import { MathNumber } from '../../models/math-number';

@Component({
  selector: 'order-number',
  templateUrl: './order-number.component.html',
  styleUrls: ['./order-number.component.css'],
  providers: [MathNumberService]
})
export class OrderNumberComponent implements OnInit {


  orderingNumbers: MathNumber[] = [];

  constructor(mathNumberService: MathNumberService) {

    this.orderingNumbers = mathNumberService.getOrderNumbers();
  }
  ngOnInit() {
  }

}
