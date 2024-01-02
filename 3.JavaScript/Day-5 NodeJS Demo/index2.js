const isOdd = (num) => {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
  //return num % 2 === 0;
};

console.log("Is 2 Odd: ", isOdd(2));
console.log("Is 3 Odd: ", isOdd(3));
console.log("Is 4 Odd: ", isOdd(4));
console.log("Is 5 Odd: ", isOdd(5));
