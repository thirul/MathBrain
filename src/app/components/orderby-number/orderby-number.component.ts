import { Component, OnInit } from '@angular/core';
import { MathNumberService } from '../../services/math-number.service';
import { MathNumber } from '../../models/math-number';

@Component({
  selector: 'orderby-number',
  templateUrl: './orderby-number.component.html',
  styleUrls: ['./orderby-number.component.css'],
  providers: [MathNumberService]
})
export class OrderbyNumberComponent implements OnInit {

  orderbyNumbers: MathNumber[] = [];

  constructor(mathNumberService: MathNumberService) {

    this.orderbyNumbers = mathNumberService.getOrderByNumbers();
  }

  ngOnInit() {
  }

}
