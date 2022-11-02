const http = require('http');
const {readFileSync, read} = require('fs');

const homepage = readFileSync('./hi.html');
const homeCss = readFileSync('./style.css');


const server = http.createServer((req,res) => {
    //homepage
    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homepage);
        res.end();
    }
    //about page
    else if(req.url === '/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write("<h1>I'm Berkay</h1>");
        res.end();
    }
    else if(req.url === '/style.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homeCss);
        res.end();
    }
    //404 page
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write("<h1>page not found</h1>");
        res.end();
    }
})
server.listen(5000);