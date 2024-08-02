function removeFirstAndLastCharacter(p) {
  let arr = p.split(",");
  arr.pop();
  arr.shift();
  arr = arr.join(" ");
  arr = arr.toString();
  return arr;
}

// Second way
function removeFirstAndLastCharacter2(p) {
  const arr = p.split(",");
  const firstChar = arr[0],
    lastChar = arr.length - 1;

  const keep = arr;
  console.log(arr);
}

const func = removeFirstAndLastCharacter2("1,2,3,4,5");
console.log(func);
