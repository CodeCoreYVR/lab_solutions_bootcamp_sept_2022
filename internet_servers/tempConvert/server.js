const http = require('http');
const url = require('url');

const httpServer = http.createServer((request,response)=> {
    const params = url.parse(request.url, true).query;
    console.log(url.parse(request.url,true));
    
    let tempFar = (params && params.temp && !isNaN(params.temp)) ? parseInt(params.temp) : "";
    let tempCel = tempFar ? ((tempFar-32)*5/9).toFixed(3) : "";
    let result = tempCel ? `${tempFar} Fahrenheit = ${tempCel} Celsius` : "";
    
    response.writeHead("200", {"Content-Type":"text/html"});
    response.write(`<html>
                        <head>
                            <title>Temerature Convert</title>
                        </head>
                        <body>
                            <h2>${result}</h2>
                        </body>
                    </html>`);
    response.end();
});

httpServer.listen(8080);
console.log("Server listening to port 8080")