const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const publicPath = path.join(__dirname, 'public');
app.set('view engine', 'ejs');
// console.log(publicPath);

// app.use(express.static(publicPath));

app.get('', (__, resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
});
app.get('/profile', (__, resp)=>{
    const data = {
        name: 'Biswajit Bala',
        email: 'email@gmail.com'
    }
    resp.render('profile',{data});
});
app.get('/about', (__, resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});
app.get('*', (__, resp)=>{
    resp.sendFile(`${publicPath}/page_not_found.html`)
});
app.listen(1200);