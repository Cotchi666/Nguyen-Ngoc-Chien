// func(5) === 1 + 2 + 3 + 4 + 5 === 15


const sumToNB = (n: number): void => {
    let input: number = n;
    let sum: number = 0;
  
    for (let i: number = 0; i <= input; i++) {
      sum += i
    }
    console.log(sum);
    console.log(performance.now());
  };
  
sumToNB(5);
  
const sumToNA = (n: number): number => {
  if (n <= 0) return 0; 
  return n * (n + 1) / 2;
};

performance.now(); 

const result = sumToNA(5);
console.log(result);


const sumToNC = (num: number): number => {
    if (num === 0) return 0; 
    let sum: number = num + sumToNC(num - 1); 
    return sum;
  };
  
const a: number = sumToNC(5);
console.log(a);
  