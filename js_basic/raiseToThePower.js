const num = parseInt(process.argv[2]);
const power = parseInt(process.argv[3]);

console.log(num ** power);

// using Math
console.log(Math.pow(num, power))