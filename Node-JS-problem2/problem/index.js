// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {

    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, { 'Content-type': 'text/html' })
        if (err) res.end(err)
        else res.end(data)
    })
})

server.listen(8080, () => console.log('server live on port 8080.......'))
module.exports = server;
