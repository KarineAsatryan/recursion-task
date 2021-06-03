let array = [6, 78, "n", 0, 1];
//let array = [5];
let j = array.length;
let i = 1;
let arr1 = [];

function arrShirt(arr) {
  if (j >= 0 && i < array.length) {
    arr1.push(arr[i]);
    //console.log(arr1);
    i++;
    //console.log(i);
    j--;
    return arrShirt(arr);
  }

  return arr1;
}
console.log(arrShirt(array));
