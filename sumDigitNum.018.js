let num = 2256211;

function digitSum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  if (sum >= 10) {
   return digitSum(sum);
  } else {
    return sum;
  }
}
console.log(digitSum(num));
