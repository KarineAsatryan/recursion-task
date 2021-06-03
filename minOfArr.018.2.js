let array = [-56, 0, -9, 87, -23, -105, 55, 1];
//let array = [-5, -9, -111, -1000, -7];
let min = array[0];
if (min < 0) {
  min = -1;
}
function minElem(arr) {
  if (arr.length == 1) {
    if (arr[0] >= 0) {
      if (min >= arr[0] || min == -1) {
        min = arr[0];
      }
    }
    return min;
  } else {
    if (arr[0] >= 0) {
      if (min >= arr[0] || min == -1) {
        min = arr[0];
      }
    }
  }
  arr.shift();

  return minElem(arr);
}

console.log(minElem(array));
