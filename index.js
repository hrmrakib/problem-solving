// 1. sum two number

const twoSum = (arr, target) => {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const element = target - arr[i];
    /**
     * 9 - 1 = 8
     * 9 - 5 = 4
     * 9 - 3 = 6
     * 9 - 8 = 5
     * 9 - 11 = -2
     * 9 - 15 = -6
     */
    if (map.has(element)) {
      console.log("element", element, i);
      return "io " + [map.get(element), i];
    } else {
      console.log("map.set:", arr[i], i);
      map.set(arr[i], i);
    }
  }
};

// const t = twoSum([2, 7, 11, 15], 9);
const t = twoSum([3, 2, 4], 6);
// const t = twoSum([1, 4, 2, 8, 11, 15], 9)
console.log(t);

// 2. remove duplicate from sorted array

function removeDuplicate(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let x = 1; x < arr.length; x++) {
    if (arr[i] !== arr[x]) {
      i++;
      arr[x] = arr[i];
    }
  }

  return i + 1;
}

// const rd = removeDuplicate([1, 2, 3, 3, 4, 4, 5, 5, 6, 6]);
// console.log(rd);
