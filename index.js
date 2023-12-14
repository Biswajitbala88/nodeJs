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

// In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.

// In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.

app.listen(1200, () => {
    console.log('Server is running on port 1200');
});



