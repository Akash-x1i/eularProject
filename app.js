let fibo =  1;
let fiboPast = 1;
let sum=0;
function fibonacciUsingWhile(num) {
  while (num >= fibo) {
    let temp = fibo;
    fibo += fiboPast;
    fiboPast = temp;
    if (fiboPast%2==0) {
      sum+= fiboPast;
    }    
    console.log(fiboPast);
    
  }
  console.log(sum);
  return sum;

}

fibonacciUsingWhile(4000000);