const http = require('http');

const server = http.createServer((req, res) => {
    res.end('This is An API Test.......');
})

server.listen(8800, () => {
    console.log('server is listening on port.............')
});