//to find the sum of a given array.
let array = [12, -56, 0, 562];
let sum = 0;
function sumArr(arr) {
  if (arr.length == 0) {
    return sum;
  } else {
    sum += arr[0];
    arr.shift();
    return sumArr(arr);
  }
  
}
console.log(sumArr(array));
