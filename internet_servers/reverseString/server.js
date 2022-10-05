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
                // data is binary data => convert it into string
                const stringData = data.toString(); // data + ''
                console.log(`Received from client => ${stringData}`);
                // 1 split this string into an array
                // 2 reverse this array
                // 3 join this array into a string
                const reversedString = stringData.split('').reverse().join('');
                console.log(`Reversed string => ${reversedString}`);
                socket.write(reversedString);
            })
    }
);

server.listen(4000);