const http = require('http');

// creating server 
const server = http.createServer((request,response) => {
    if(request.url === '/'){
        response.end('Hello World')
    }
    if(request.url === '/about'){
        response.end('What About World')
    }
    
})

server.listen(5000);