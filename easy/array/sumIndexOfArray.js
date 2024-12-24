/**
 * Sum only indexes of an array, not element
 * 0, 1, 2, 3, 4, 5, .......... (Totoal index of an Array)
 */

const arr = [13, 22, 23, 23, 32, 43, 95, 73, 67, 56, 54, 37, 75, 37];

const sumIndexOfArray = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumIndexOfArray(arr));
