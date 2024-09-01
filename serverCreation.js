// import Module/library 
const http = require('http')
//create Server........
const server = http.createServer((req, res) => {
    res.end('This is Pancho Server..')
})
//set port number to listen to client's request.........
server.listen(3200, () => {
    console.log('Pancho is Listening.......')
})