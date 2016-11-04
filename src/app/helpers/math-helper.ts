export class MathHelper {
     public static Random(min:number, max:number):number{
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    public static IsOddNumber(num:number):boolean{
         return (num%2) == 1;
     }
     public static GetGreaterNumber(num:number, min:number, max:number):number{
        
        var greaterNum = -1;
        do{
            greaterNum = this.Random(min, max);
        }while( num > greaterNum);
        return greaterNum;
    }

    
    public static GetLessNumber(num:number, min:number, max:number):number{
        
        var greaterNum = 100000000;
        do{
            greaterNum = this.Random(min, max);
        }while( num < greaterNum);
        return greaterNum;
    }

     public static GetGreaterNumbers(count:number, min:number, max:number):Array<number>{
        
        var nums = new Array<number>();
        var num =  this.Random(min, max);
        
        nums.push(num);
        for(var i=0; i<count-1; i++)
        {
            var t =  this.GetGreaterNumber(num, min, max);
            nums.push(t);
            num = t;
            
        }
        return nums;
    }
     public static  GetLessNumbers(count:number, min:number, max:number):Array<number>{
        
        var nums = new Array<number>();
        var num =  this.Random(min, max);
        
        nums.push(num);
        for(var i=0; i<count-1; i++)
        {
            var t =  this.GetLessNumber(num, min, max);
            nums.push(t);
            num = t;
            
        }
        return nums;
    }
}
