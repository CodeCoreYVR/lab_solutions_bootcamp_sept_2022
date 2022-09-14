// Write a function, mergeSet, that merges two arrays and removes all duplicate elements.

function mergeSet(arr1, arr2) {
  // combine arrays
  const combinedArr = arr1.concat(arr2);
  // sort array
  combinedArr.sort();
  // iterate and eliminate like values
  // because we sorted the arrays like values will be beside each other.
  let i = 0;
  while (i < combinedArr.length) {
    // compare elements beside each other. If they are the same remove the extra value and check again.
    if (combinedArr[i] === combinedArr[i + 1]) {
      combinedArr.splice(i + 1, 1); // see documentation for splice https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    } else {
      // only increment if they're not the same because if they are the same we will remove an element so (i + 1) will be a brand new value that needs to be checked against i
      i++;
    }
  }
  return combinedArr;
}

console.log(mergeSet([1,2,3], [2,3,4,5,6,7]));

