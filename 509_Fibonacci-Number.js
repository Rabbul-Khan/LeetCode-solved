/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let num1 = 0;
  let num2 = 1;
  let sum = 1;
  let i = 2;

  const fibHelper = (num1, num2, i) => {
    if (i === n) {
      return num1 + num2;
    } else {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
      i++;
      return fibHelper(num1, num2, i);
    }
  };

  return fibHelper(num1, num2, i);
};
