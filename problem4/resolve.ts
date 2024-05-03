// func(5) === 1 + 2 + 3 + 4 + 5 === 15

const sumToNB = (n: number): void => {
    let input: number = n;
    let count: number = 0;
    let array: number[] = [n];
  
    for (let i: number = 0; i < input; i++) {
      array.push(i);
    }
    console.log(array);
    console.log(performance.now());
  };
  
  sumToNB(5);
  
  const sumToNA = (n: number): void => {
    let end: number = n;
    let sum: number = 0;
    for (let i: number = 0; i < n; i++) {
      end = n - i;
      sum += end;
    }
    console.log(sum);
    console.log(performance.now());
  };
  
  sumToNA(5);
  