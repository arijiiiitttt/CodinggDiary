
/* Sum of all natural numbers from 1 to n */

function SumOfNaturalNumbers(num){
  let sum=0;
  for(let i=0;i<=num;i++){
    sum=sum+i;
  }
  return num*(num+1)/2;
}
console.log(SumOfNaturalNumbers(5)) 15
console.log(SumOfNaturalNumbers(10)) 55
console.log(SumOfNaturalNumbers(8)) 36
console.log(SumOfNaturalNumbers(13)) 91
