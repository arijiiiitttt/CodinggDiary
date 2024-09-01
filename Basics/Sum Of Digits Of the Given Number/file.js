function SumOfDigits(num){

    let sum=0;
    while(num>0){
        sum+=num%10;
        num=Math.floor(num/10);
    }
    return sum;
}
console.log(SumOfDigits(127))
console.log(SumOfDigits(7895))
console.log(SumOfDigits(23))
console.log(SumOfDigits(8995))
console.log(SumOfDigits(5623))
console.log(SumOfDigits(12321))
