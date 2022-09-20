function maximumIteration(arr) {
    // loop this arr, find out the maximum element of the arr
    // return this element 
    let result = 0;
    arr.forEach(element => {
        // compare the element with the last element
        // for the first element ? is the last element
        if (element > result) {
            result = element;
        }
    });
    return result;
}
function maxIter(arr) {
    let max = 0;
    for (let elem of arr) {
        if (elem > max) {
            max = elem;
        }
    }
    return max;
}

function maxRecur(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    if (arr[0] > arr[1]) {
        arr[1] = arr[0];
    }
    return maxRecur(arr.slice(1));
}

// Generating array with some random numbers.
const array = [];
while (array.length !== 100) {
    randomNum = Math.floor(Math.random() * 1000);
    if (!array.includes(randomNum)) {
        array.push(randomNum);
    }
}
console.log(array);
console.time('a')
console.log(maxIter(array))
console.timeEnd('a')

console.time('b')
console.log(maxRecur(array))
console.timeEnd('b')