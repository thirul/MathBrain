import { Component, OnInit } from '@angular/core';
import { MathNumberService } from '../../services/math-number.service';
import { MathString } from '../../models/math-string';


@Component({
  selector: 'addition-number',
  templateUrl: './addition-number.component.html',
  styleUrls: ['./addition-number.component.css'],
  providers: [MathNumberService]
})
export class AdditionNumberComponent implements OnInit {

  additionNumbers: MathString[] = [];

  constructor(mathNumberService: MathNumberService) {

    this.additionNumbers = mathNumberService.getAdditionNumbers();
  }

  ngOnInit() {
  }

}
