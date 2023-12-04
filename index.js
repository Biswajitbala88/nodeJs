const express = require('express');
const app = express();

app.get('', (req, resp)=>{
    resp.send('this is home page');
});

app.get('/about', (req, resp)=>{
    resp.send('this is about page');
});

app.get('/contact', (req, resp)=>{
    resp.send('this is contact page');
});

app.listen(1200);