// - The client should take a string input of comma delimited numbers from the user (e.g. "1,2,3,4,5,6,7,8,9") and send it to the server.

// - The server should respond with the largest number. (e.g. given "1,2,3,4,5,6,7,8,9" responds with 9)

// - The client should print the server response in the console.
const net = require('net');

const server = net.createServer(
    socket => {
        // get the data from the client side
        // reverse it
        // send it back to the client
        socket
        .on("error", (err) => {
            // console.log(err)
        })
        .on('data', data => {
            // get the data and convert it into a string 
            // get the largest number 
            // send it back to the client side
            const numbers = (data.toString()).split(',');
            console.log(`number list is ${numbers}`)
            const max = Math.max.apply(Math, numbers);// also can use loop
            console.log(`the max number is ${max}`)
            // socket.write receives string or buffer of bytes
            socket.write(max.toString());
        })
    }
);


server.listen(4000);
console.log('Server is listening on the port 4000');