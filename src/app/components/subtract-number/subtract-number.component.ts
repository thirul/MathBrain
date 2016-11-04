import { Component, OnInit } from '@angular/core';
import { MathNumberService } from '../../services/math-number.service';
import { MathString } from '../../models/math-string';

@Component({
  selector: 'subtract-number',
  templateUrl: './subtract-number.component.html',
  styleUrls: ['./subtract-number.component.css'],
  providers: [MathNumberService]
})
export class SubtractNumberComponent implements OnInit {

    subtractNumbers: MathString[] = [];

  constructor(mathNumberService: MathNumberService) {

    this.subtractNumbers = mathNumberService.getSubtractNumbers();
  }


  ngOnInit() {
  }

}
