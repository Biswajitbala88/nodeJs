const http = require('http');

// create a function and pass the function as parameter in server
function testData(req, resp){
    resp.write('<h1>hii this is new server 12345</h1>');
    resp.end();


    
}


http.createServer(testData).listen(1201);