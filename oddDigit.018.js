let n = 159513570;

function oddDigitNum(num) {
  if (num > 1) {
    let num1 = num % 10;
    if (num1 % 2 !== 0) {
      num = Math.floor(num % 10);
      return true;
    } else {
      return false;
    }
    return oddDigitNum(num);
  }
}
console.log(oddDigitNum(n));
