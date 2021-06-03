let array = [2, 5, 3];
let arr1 = [];
let arr0 = [0];
let leng = array.length;
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
arr0 = arr0.concat(array);
function giveArr(a) {
  if (array.length > 1) {
    arr1 = [];
    for (let i = 1; i < a.length; i++) {
      arr1[i - 1] = a[0] + a[i];
    }
    arr0 = arr0.concat(arr1);
    array.shift();
    giveArr(array);
  } else {
    return arr0;
  }
}
giveArr(array);
arr0.push(sum);
console.log(arr0);
