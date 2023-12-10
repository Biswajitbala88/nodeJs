const express = require('express');
const path = require('path');
const ejs = require('ejs');
const reqFilter = require('./middleware');
const dbconnect = require('./mongodb');

const app = express();
const publicPath = path.join(__dirname, 'public');
app.set('view engine', 'ejs');
// console.log(publicPath);


// app.use(reqFilter);

// Create a router instance
const router = express.Router();

// Apply the middleware to the router
router.use(reqFilter);

// app.use(express.static(publicPath));

app.get('', (__, resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
});
router.get('/profile', (_, resp) => {
    const data = {
        name: 'Biswajit Bala',
        email: 'email@gmail.com',
        skills: ['node', 'php', 'html']
    };
    resp.render('profile', { data });
});
router.get('/about', (__, resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});
app.use('/', router);

app.get('*', (__, resp)=>{
    resp.sendFile(`${publicPath}/page_not_found.html`)
});

app.listen(1200, () => {
    console.log('Server is running on port 1200');
});


const main = async ()=>{
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data);
}
main();

