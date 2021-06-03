let array = ["a", "b", "c", "d", "e", "f", "g", "h"];
let index = 3;
let j = array.length - 1;
let ind = array.length - index;
function rotateArr(arr, j) {
  if (ind > 0) {
    arr.unshift(arr[j]);
    arr.pop();
    ind--;
    rotateArr(arr, j);
  }
  return arr;
}
console.log(rotateArr(array, j));
