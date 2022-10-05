// get a string => typed by the user => use readline
// send this string to the server side
// wait the response of the server side
// log the response => max number

const net = require('net');

const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const client = new net.Socket();

const takeInput = () => {
    interface.question('Type the word to reverse: ', input => {
        // input is the user's input
        client.write(input);
    })
}

client.on('data', data => {
    // get the data from the server side
    // log it 
    // end this process
    console.log(data + '');
    takeInput();
})

client.connect(4000, 'localhost', () => {
    takeInput();
})