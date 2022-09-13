const sentence = process.argv[2];
let result = "";
sentence.split('').forEach(element => {
    result += (element === element.toUpperCase()) ? element.toLowerCase() : element;
});
console.log(result);