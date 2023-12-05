const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');
app.set('view engin', 'ejs');
// console.log(publicPath);

// app.use(express.static(publicPath));

app.get('', (__, resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
});
app.get('/about', (__, resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});
app.get('*', (__, resp)=>{
    resp.sendFile(`${publicPath}/page_not_found.html`)
});
app.listen(1200);