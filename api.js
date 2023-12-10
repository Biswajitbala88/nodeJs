const express = require('express');
const path = require('path');
const ejs = require('ejs');
const reqFilter = require('./middleware');
const dbconnect = require('./mongodb');

const app = express();
const publicPath = path.join(__dirname, 'public');
app.set('view engine', 'ejs');
app.use(express.json());
// console.log(publicPath);


// app.use(reqFilter);

// Create a router instance
const router = express.Router();

// Apply the middleware to the router
router.use(reqFilter);

// app.use(express.static(publicPath));

app.get('', async (__, resp)=>{
    const db = await dbconnect();
    const result = await db.find().toArray();
    resp.send(result);
    // resp.sendFile(`${publicPath}/home.html`)
});
app.post('/insert', async (req, resp)=>{
    try{
        const data = req.body;
        const db = await dbconnect();
        const result = await db.insertOne(data);
        console.log(result);
        resp.send(result);
    }catch(err){
        console.log('error is >>>>>>>>>>', err);
    }
});
app.put('/update', async (req, res) => {
    try {
        const filter = { name: req.body.name }; // Filter based on the 'name' field
        const update = { $set: { email: req.body.email } }; // Update the 'email' field

        const db = await dbconnect();
        const result = await db.updateOne(filter, update);

        console.log(result);

        if (result.matchedCount > 0) {
            res.status(200).json({ message: 'Data updated successfully', result });
        } else {
            res.status(404).json({ message: 'No matching document found' });
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
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


// const main = async ()=>{
//     let data = await dbconnect();
//     data = await data.find().toArray();
//     console.log(data);
// }
// main();

