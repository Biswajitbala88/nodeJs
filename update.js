const dbconnect = require('./mongodb');

const updateData = async ()=>{
    try{
        const db = await dbconnect();
        const filter = {age: 25};
        const updateVal = {$set: 
            {
                name: "Biswajit88"
            }
        };
        const result = await db.updateMany(filter, updateVal);
        console.log('modified count is ', result.modifiedCount);
    } catch (error) {
        console.log('the error is ', error);
    }
}
updateData();