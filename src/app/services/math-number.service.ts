import { Injectable } from '@angular/core';
import { MathNumber } from '../models/math-number';
import { MathString } from '../models/math-string';
import { MathHelper } from '../helpers/math-helper';
import { MathConfig } from '../math-config';

@Injectable()
export class MathNumberService {

  constructor() { }

  getOddEvenNumbers(): MathNumber[] {

    var oddEvenNumbers: MathNumber[] = [];

    for (var i = 0; i < MathConfig.MissingNumbersItems; i++) {
      var randNum = MathHelper.Random(MathConfig.MissingNumberRandomMin, MathConfig.MissingNumberRandomMax);
      var numbers = [randNum, null];
      oddEvenNumbers.push(new MathNumber({ numbers: numbers }))
    }
    return oddEvenNumbers
  }

  getMissingNumbers(): MathNumber[] {

    var missingNumbers: MathNumber[] = [];

    for (var i = 0; i < MathConfig.MissingNumbersItems; i++) {
      var randNumber = MathHelper.Random(MathConfig.MissingNumberRandomMin, MathConfig.MissingNumberRandomMax);
      var numbers = [randNumber, null, randNumber + 2, null, randNumber + 4];
      missingNumbers.push(new MathNumber({ numbers: numbers }))
    }
    return missingNumbers
  }


  getOrderNumbers(): MathNumber[] {
    var orderNumbers: MathNumber[] = [];

    for (var i = 0; i < MathConfig.OrderNumbersItems; i++) {
      var numbers: number[] = [];
      var emptyNumbers: number[] = [];

      for (var j = 0; j < 5; j++) {
        var randNum = MathHelper.Random(MathConfig.MissingNumberRandomMin, MathConfig.MissingNumberRandomMax);
        numbers.push(randNum)
        emptyNumbers.push(null);
      }

      orderNumbers.push(new MathNumber({ numbers: numbers }))
      orderNumbers.push(new MathNumber({ numbers: emptyNumbers }))
    }
    return orderNumbers
  }

  getOrderByNumbers(): MathNumber[] {
    var orderByNumbers: MathNumber[] = [];
    for (var i = 0; i < MathConfig.MissingNumbersItems; i++) {

      var ran = MathHelper.Random(MathConfig.MissingNumberRandomMin, MathConfig.MissingNumberRandomMax);
      if (MathHelper.IsOddNumber(ran)) {
        var descNums = MathHelper.GetLessNumbers(4, MathConfig.MissingNumberRandomMin, MathConfig.MissingNumberRandomMax);
        descNums.push(null);
        orderByNumbers.push(new MathNumber({ numbers: descNums }))
      }
      else {
        var ascendingNums = MathHelper.GetGreaterNumbers(4, MathConfig.MissingNumberRandomMin, MathConfig.MissingNumberRandomMax);
        ascendingNums.push(null);
        orderByNumbers.push(new MathNumber({ numbers: ascendingNums }))
      }
    }
    return orderByNumbers
  }

  getAdditionNumbers(): MathString[] {

    var additionNumbers: MathString[] = [];

    for (var i = 0; i < MathConfig.MissingNumbersItems; i++) {
      var randNum = MathHelper.Random(MathConfig.AdditionNumberRandomMin, MathConfig.AdditionNumberRandomMax10);
      var randNum2 = MathHelper.Random(MathConfig.AdditionNumberRandomMin, MathConfig.AdditionNumberRandomMax20);
      var numbers2 = [randNum.toString(), "+", randNum2.toString(), "=", null];
      additionNumbers.push(new MathString({ stringValues: numbers2 }));
    }
    return additionNumbers
  }



  getSubtractNumbers(): MathString[] {

    var subtractNumbers: MathString[] = [];

    for (var i = 0; i < MathConfig.MissingNumbersItems; i++) {

      var randNum = MathHelper.Random(MathConfig.AdditionNumberRandomMin, MathConfig.AdditionNumberRandomMax10);
      var randNum2 = MathHelper.Random(MathConfig.AdditionNumberRandomMin, MathConfig.AdditionNumberRandomMax10);
      do {
        randNum2 = MathHelper.Random(MathConfig.AdditionNumberRandomMin, MathConfig.AdditionNumberRandomMax10);
      } while (randNum < randNum2);

      var numbers2 = [randNum.toString(), "-", randNum2.toString(), "=", null];
      subtractNumbers.push(new MathString({ stringValues: numbers2 }))
    }

    return subtractNumbers
  }



}
