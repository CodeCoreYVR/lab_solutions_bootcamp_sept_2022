const net = require('net');
const socket = new net.Socket();
const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const askQuestion = () => {
    interface.question('Find the largest Number: ', input => {
        // input is the user's input
        socket.write(input);
    })
}

socket.on('data', data => {
    // get the data from the server side
    // log it 
    // end this process
    console.log(data.toString());
    askQuestion();
    // process.exit();
})

socket.connect(4000, 'localhost', () => {
    askQuestion();
})