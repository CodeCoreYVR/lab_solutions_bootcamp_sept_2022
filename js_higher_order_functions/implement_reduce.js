function reduce(array, func, initialVal){

    let total = initialVal
    for (let i = 0; i < array.length; i++) {
        
        total = func(array[i], total)
        
    }
    return total;
}

const plus = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];

reduce(numbers, plus, 0); // 15
reduce(numbers, (a, b) => a * b, 1); // 120