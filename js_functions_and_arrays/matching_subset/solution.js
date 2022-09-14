// Create a function, matchingSet, that takes two arrays as arguments. It should return an array of all the elements that are shared between the two arrays (without duplicates). Effectively, it should return the intersection of both arrays.


// brute force solution
function matchingSet(arr1, arr2) {
  let matching = [];
  for (let a of arr1) {
    for (let b of arr2) {
      if (a === b) {
        matching.push(a);
      }
    }
  }
  // matching will befilled with all the matches but it will still contain duplicates.
  // below is logic to remove them.
  matching.sort();
  let i = 0;
  while (i < matching.length) {
    if (matching[i] === matching[i + 1]) {
      matching.splice(i + 1, 1);
    } else {
      i++;
    }
  }
  return matching;
}

console.log(matchingSet([1,2,2,3,4,5], [2,4,6,7,8,]));

