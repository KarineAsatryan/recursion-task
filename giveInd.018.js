//Given an array of numbers which is almost sorted in ascending order. Find the index
//where sorting order is violated.

//let array = [2, 12, 15, 48, 64];
let array = [-9, -4, -4, 3, 12, 4, 5];
let index = -1;
let i = 1;
function giveIndex(arr) {
  if (arr.length > 2) {
    while (index === -1) {
      if (arr[0] <= arr[1]) {
        arr.shift();
        i++;
        return giveIndex(arr);
      } else {
        index = i;
      }
    }
    return index;
  }
  return index;
}
console.log(giveIndex(array));
