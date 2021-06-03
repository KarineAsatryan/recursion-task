let array = [14, [1, [[[3, [4]]], 1], 0]];
let arr2 = [];
function nestedArr(arr) {
  let nest = false;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) == false) {
      arr2.push(arr[i]);
    } else {
      nest = true;
      for (let j = 0; j < arr[i].length; j++) {
        arr2.push(arr[i][j]);
      }
    }
  }
  if (nest === true) {
    arr = arr2;
    arr2 = [];
    return nestedArr(arr);
  } else {
    return arr2;
  }
}

console.log(nestedArr(array));
