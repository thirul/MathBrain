import { Component, OnInit } from '@angular/core';
import { MathNumberService } from '../../services/math-number.service';
import { MathNumber } from '../../models/math-number';

@Component({
  selector: 'missing-number',
  templateUrl: './missing-number.component.html',
  styleUrls: ['./missing-number.component.css'],
  providers: [MathNumberService]
})
export class MissingNumberComponent implements OnInit {

  missingNumbers: MathNumber[] = [];

  constructor(mathNumberService: MathNumberService) {

    this.missingNumbers = mathNumberService.getMissingNumbers();
  }

  ngOnInit() {
  }

}
