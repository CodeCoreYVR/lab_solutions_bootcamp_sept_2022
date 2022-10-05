const http = require('http');

const server = http.createServer((request, response) => {
    const params = new URL(request.url, 'http://localhost:8080/');
    const score = parseInt(params.searchParams.get('score'));
    const letterGrade = convertScore(score);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(`
    <!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <h1>${letterGrade}</h1>
      </body>
    </html>
  `);
    response.end();
});

server.listen(8080);
console.log('Server listening on port 8080');

function convertScore(score) {
    switch (true) {
        case score >= 90:
            return 'A';
        case score >= 80:
            return 'B';
        case score >= 70:
            return 'C';
        case score >= 60:
            return 'D';
        default:
            return 'F';
    }
}