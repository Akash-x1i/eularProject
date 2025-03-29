let fibo =  1;
let fiboPast = 1;
let sum=0;

function fiboEvenSum(num) {
   while (num >= fibo) {
    let temp = fibo;
    fibo += fiboPast;
    fiboPast = temp;
    if (fiboPast%2==0) {
      sum+= fiboPast;
    }    
    // console.log(fiboPast);
    
  }
  console.log(sum);
  return sum;
}

fiboEvenSum(8)