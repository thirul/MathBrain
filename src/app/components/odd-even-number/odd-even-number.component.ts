import { Component, OnInit } from '@angular/core';
import { MathNumberService } from '../../services/math-number.service';
import { MathNumber } from '../../models/math-number';

@Component({
  selector: 'odd-even-number',
  templateUrl: './odd-even-number.component.html',
  styleUrls: ['./odd-even-number.component.css'],
  providers: [MathNumberService]
})
export class OddEvenNumberComponent implements OnInit {

  oddEvenNumbers: MathNumber[] = [];

  constructor(mathNumberService: MathNumberService) {

    this.oddEvenNumbers = mathNumberService.getOddEvenNumbers();
  }

  ngOnInit() {
  }

}
