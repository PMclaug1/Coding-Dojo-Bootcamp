

function fib(num) {
    if (num == 0) return 0;
    if (num == 1) return 1;
    return fib(num-2) + fib(num-1);
 }


function fib1(n, a=1, b=0) {
    if (n === 0) {
      return b;
    } else {
      return fib1(n-1, b, a+b);
    }
  }
  
  // ES6 Tail Call optimization
  const fibonacci = (n, a = 1, b = 0) => (n === 0) ? b : fibonacci(n - 1, a + b, a);
  

  console.log(fib(10))
  console.log(fib1(42))
  console.log(fibonacci(42))


//   Return the fibonacci number at the nth position, recursively.
  
//   Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//   The next number is found by adding up the two numbers before it,
//   starting with 0 and 1 as the first two numbers of the sequence.
//   i.e, for n > 1 fib(n) = fib(n-1) + fib(n-2) 
//   */

  const num1 = 0;
  const expected1 = 0;
  
  const num2 = 1;
  const expected2 = 1;
  
  const num3 = 2;
  const expected3 = 1;
  
  const num4 = 3;
  const expected4 = 2;
  
  const num5 = 4;
  const expected5 = 3;
  
  const num6 = 8;
  const expected6 = 21;
  
  /**
   * Recursively finds the nth number in the fibonacci sequence.
   * - Time: O(?).
   * - Space: O(?).
   */
  // Finish early? Try to implement memoization. Feel free to google! 
  
//   let fibonacci = (num) => {
//     let a = 0;
//     let b = 1;
   
//     //to store the sum
//     let c = 0;
    
