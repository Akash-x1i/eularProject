function sumof(num) {
    let sumof = (num * (num + 1))/2;
    return sumof;
  }
  
  function numOfMultiples(multiple, limit) {
    limit-=1;
    let numOfMultiples = (limit/multiple)-(limit/multiple)%1;
    return numOfMultiples;
  }
  
  
  function multiplesOf3Or5(limit) {
    
    // sumof()
    let sum = sumof(numOfMultiples(3,limit))*3 + sumof(numOfMultiples(5, limit))*5 - sumof(numOfMultiples(15,limit))*15;
    return sum;
  }
  
  console.log(multiplesOf3Or5(1000));