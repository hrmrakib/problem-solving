// execute highest and lowest number from string

function highAndLow(p) {
  const strArr = p.split(" ");
  const numberArr = [];
  for (let i of strArr) {
    numberArr.push(parseInt(i));
  }
  return `${Math.max(...numberArr)} ${Math.min(...numberArr)}`;
}

// Different Way
function highAndLow2(p) {
  const str = p.split(" ");
  const num = str.map(Number);
  return `${Math.max(...num)} ${Math.min(...num)}`;
}

console.log(highAndLow2("11 21 46 98 -9 34 -2 50"));
