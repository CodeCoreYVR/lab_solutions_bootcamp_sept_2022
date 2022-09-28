const readline = require('readline');

const interface = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
        prompt: "> "
    }
);
// the number for guessing
const number = 5;// Math.random(range)

// how many times 
let amount = 0;

console.log("I'm thinking of a number between 1 and 10");
interface.prompt();
interface.on('line', line => {
    amount++;
    // check the user input
    // if it's correct => end this game
    // if it's not => continue
    if (line == number) {
        console.log(`Guessed "${number}" correctly in ${amount} attempts!`);
        process.exit();
    } else {
        console.log('Nope. Try again.');
        interface.prompt();
    }
})