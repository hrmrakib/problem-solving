// execute highest and lowest number from string

function highAndLow(p) {
  const strArr = p.split(" ");
  if (str.length <= 1) {
    return "At least two numbers";
  }
  const numberArr = [];
  for (let i of strArr) {
    numberArr.push(parseInt(i));
  }
  return `${Math.max(...numberArr)} ${Math.min(...numberArr)}`;
}

// Different Way
function highAndLow2(p) {
  const str = p.split(" ");
  if (str.length <= 1) {
    return "At least two numbers";
  }
  const num = str.map(Number);
  return `${Math.max(...num)} ${Math.min(...num)}`;
}

console.log(highAndLow2("11"));
