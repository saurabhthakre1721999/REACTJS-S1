const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
  //return num % 2 === 0;
};

console.log("Is 2 Even: ", isEven(2));
console.log("Is 3 Even: ", isEven(3));
console.log("Is 4 Even: ", isEven(4));
console.log("Is 5 Even: ", isEven(5));
