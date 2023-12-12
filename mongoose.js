const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost:27017/nodejs');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const inserData = async ()=>{
    const User = mongoose.model('user', userSchema);
    const data = new User(
        {
            name: "Biswajit123",
            age: 100
        }
    );
    const result = await data.save();
    console.log(result);

}

const updateData = async ()=>{
    const User = mongoose.model('user', userSchema);

    const filter = { name: "Biswajit1234" }; 
    const update = { $set: { age: 99 } };

    const result = await User.updateOne(filter, update);

    console.log(result);


}

updateData();
