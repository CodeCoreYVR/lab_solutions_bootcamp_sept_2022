function map(arr, fn) {
    let result = [];
    arr.forEach(element => {
        result.push(fn(element));
    });
    return result;
}

// function map(arr, fn) {
//     const result = [];
//     const getResult = function (arr) {
//         if (arr.length > 0) {
//             result.push(fn(arr.shift()));
//             getResult(arr, fn);
//         } else {
//             return
//         }
//     }
//     getResult(arr);
//     return result;
// }

const even = n => n % 2 === 0;
const pow2 = n => n ** 2;
const numbers = [1, 2, 3, 4, 5, 6];
console.log(map(numbers, even)); // [false, true, false, true, false, true]
console.log(map(numbers, n => n.toString().repeat(n)))// ['1', '22', '333', '4444', '55555', '666666']
console.log(map(numbers, pow2)); // [1, 4, 9, 16, 25, 36]
const names = ["Cersei", "Jon", "Arya"];
console.log(map(names, name => `Hi, ${name}!`)); // ['Hi, Cersei!', 'Hi, Jon!', 'Hi, Arya!']