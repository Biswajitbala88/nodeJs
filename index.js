const mongoose = require('mongoose');
const express = require('express');

const app = express();
const confih = require('./config');
const User = require('./user');
app.use(express.json());


app.post("/create", async (req, resp)=>{
    const data = new User(req.body);
    const result = await data.save();
    resp.send(result);

});


app.listen(1200, () => {
    console.log('Server is running on port 1200');
});



