const http = require('http');


http.createServer((req, resp)=>{
    resp.write('<h1>hii this is new server 123</h1>');
    resp.end();
}).listen(1201);