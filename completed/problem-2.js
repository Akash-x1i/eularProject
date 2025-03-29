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

// https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-2-even-fibonacci-numbers

function fibonacciUsingRecursion(num) {
  if (fibo > num ) {
    console.log(sum);
    return sum;
    }
    let temp = fibo;
    fibo += fiboPast;
    fiboPast = temp;
    if (fiboPast%2==0) {
    sum += fiboPast;
    }
    return fibonacciUsingRecursion(num);
}

fibonacciUsingRecursion(4000000);


