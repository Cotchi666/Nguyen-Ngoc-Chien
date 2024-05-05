// This function uses a formula for summing up numbers from 1 to n.
// The time complexity of this function is O(1), it's very efficient for large inputs as it doesn't need to iterate through each number.
const sumToNA = (n: number): number => {
  if (n <= 0) return 0;
  return (n * (n + 1)) / 2;
};

// This function uses a simple iterative loop to sum up numbers from 1 to the given input n.
// The time complexity of this function is O(n) because it iterates through the numbers from 1 to n once.
// It has a linear complexity, meaning the time taken to execute scales linearly with the input size.
const sumToNB = (n: number): void => {
  let input: number = n;
  let sum: number = 0;

  for (let i: number = 0; i <= input; i++) {
    sum += i;
  }
};

// This function uses recursion to sum up numbers from 1 to the given input num.
// The time complexity of this function is O(n)
// However, it's less efficient than sumToNB because it involves function call overhead and stack usage due to recursion.
const sumToNC = (num: number): number => {
  if (num === 0) return 0;
  let sum: number = num + sumToNC(num - 1);
  return sum;
};
