let s = "LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO";
let str1 = [];
let acc = 0;
function addBrack(str) {
  if (str.length == 3) {
    str1.splice(acc, 0, str[0], "(", str[1], ")", str[2]);
    return str1.join("");
  }
  if (str.length == 4) {
    str1.splice(acc, 0, str[0], "(", str[1], str[2], ")", str[3]);
    return str1.join("");
  }
  if (str.length > 4) {
    str1.splice(acc, 0, str[0], "(");
    str1.splice(str1.length - acc, 0, ")", str[str.length - 1]);
    acc += 2;

    str = str.slice(1, -1);

    return addBrack(str);
  }
  return str1.join("");
}
console.log(addBrack(s));
