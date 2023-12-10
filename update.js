const dbconnect = require('./mongodb');

const updateData = async ()=>{
    try{
        const db = await dbconnect();
        const filter = {name: "Suvo"};
        const updateVal = {$set: 
            {
                age: 25
            }
        };
        const result = await db.updateOne(filter, updateVal);
        console.log('modified count is ', result.modifiedCount);
    } catch (error) {
        console.log('the error is ', error);
    }
}
updateData();