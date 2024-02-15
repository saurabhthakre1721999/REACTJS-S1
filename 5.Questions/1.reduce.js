const nums = [1, 2, 3];

const sum = nums.reduce((prevVal, currentVal) => {
  console.log({ prevVal, currentVal });
  return prevVal + currentVal;
});

console.log("Sum: ", sum);

const arr = [1, 2, 3, 4, 5];

// Multiply 5

// Give me divisible by 10

const arrMulBy5 = arr.map((item) => item * 5);

const divisbleBy10 = arrMulBy5.filter((item) => item % 10 === 0);

const mulBy5ThenFindDivisbleBy10 = arr.reduce((prev, current) => {
  const num = current * 5;
  if (num % 10 === 0) {
    prev.push(num);
  }
  return prev;
}, []);

console.log({ arrMulBy5, divisbleBy10, mulBy5ThenFindDivisbleBy10 });
