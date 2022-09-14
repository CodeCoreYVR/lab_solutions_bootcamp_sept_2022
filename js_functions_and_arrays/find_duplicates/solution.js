// Write a function, findDuplicates, that takes an array of strings and/or integers, values. Return a new array containing all the values that are duplicated in the array.

// brute force

function findDuplicates(arr) {
  let duplicates = [];
  arr.sort();
  while (arr.length) {
    if (arr[0] === arr[1]) {
      // do not push to duplicates array if it already exists.
      if (duplicates[duplicates.length -1] !== arr[0]) {
        duplicates.push(arr[0]);
      }
    }
    arr.splice(0, 1);
  }
  return duplicates;
}

console.log(findDuplicates(['a','b','c','b']));
console.log(findDuplicates([1,2,3,3,4,5,6,5,6,6,6,6,6,6]));

