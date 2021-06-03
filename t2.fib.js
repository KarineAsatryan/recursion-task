let num = 5
function nthFibNum(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  if (n > 3) {
    console.log(nthFibNum(n - 1));
    console.log(nthFibNum(n - 2));
    return nthFibNum(n - 1) + nthFibNum(n - 2);
    n--;
  }
}
console.log(nthFibNum(num));
