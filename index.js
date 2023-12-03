// npx kill-port 1200

// for(i=0;i<=10;i++){
//     console.log(i);
// }
// const app = require('./app');
// const arr=[2,3,4,5,3,4];
// let result = arr.filter((item)=>{
//     // console.log(item);
//     return item>=4;
// })
// console.log(result);
// var colors = require('colors');
// console.log('hello'. yellow);

const http = require('http');
http.createServer((req, resp)=>{
    resp.writeHead(200, {'Content-Type': 'application/json'});
    resp.write(JSON.stringify({
        name: 'Biswajit Bala',
        email: 'biswajitbala88@gmail.com'
    }));
    resp.end();

}).listen(1200);