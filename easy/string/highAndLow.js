// execute highest and lowest number from string

function highAndLow(p) {
  const strArr = p.split(" ");
  const numberArr = [];
  for (let i of strArr) {
    numberArr.push(parseInt(i));
  }
  return `${Math.min(...numberArr)} ${Math.max(...numberArr)}`;
}

// Different Way
function highAndLow2(p) {}

console.log(highAndLow("11, 21, 46, 98, -9, 34, -2, 50"));
