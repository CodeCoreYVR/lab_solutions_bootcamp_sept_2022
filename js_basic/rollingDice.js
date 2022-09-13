const quantity = parseInt(process.argv[2]);
const representsNumber = parseInt(process.argv[3]);
let total = 0;
for (i = 0; i < quantity; i++) {
    const randomNum = parseInt(Math.random() * representsNumber + 1);
    total += randomNum;
    console.log("Rolled: " + randomNum);
}
console.log("-----------------------------");
console.log("Average Roll: " + parseInt(total / quantity));
console.log("Total: " + total);