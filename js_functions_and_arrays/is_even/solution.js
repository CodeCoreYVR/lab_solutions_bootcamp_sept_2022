// Write a function, isEven, that takes a number as argument. It returns true if the number is even otherwise it returns false. You are not allowed to use the modulus operator (%) nor the division operator (/).

function isEven(n) {
  let flag = false;
  while (n >= 0) {
    flag = !flag;
    n--;
  }
  return flag;
}

function isEven2(n) {
  return (n & 1) ? false: true; 
}

// 101101010 & 1 = 0 equivalent to false
// 10011 & 1 = 1 equivalent to true


console.log(isEven(9));
console.log(isEven(10));
console.log(isEven(0));

