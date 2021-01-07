const isNumberBiggerThanTen = (number1: number, number2: number): boolean => {
  const result: number = number1 + number2;
  if (result > 10) {
    return true;
  } else {
    return false;
  }
};

console.log(isNumberBiggerThanTen(5, 5));
