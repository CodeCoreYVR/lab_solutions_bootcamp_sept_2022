// Write a function, zip, that takes two arrays of the same length, arrA & arrB. If arrA and arrB are not the same length, the function should return undefined. Otherwise, it should combine both arrays together in a two-dimensional array:

function zip(arr1, arr2) {
  if (arr1.length === arr2.length) {
    const zippedArr = [];
    for (let i = 0; i < arr1.length; i++) {
     zippedArr.push([arr1[i], arr2[i]]);
    }
    return zippedArr;
  }
}


console.log(zip(['firstName', 'lastName'], ['Jon', 'Snow']));
