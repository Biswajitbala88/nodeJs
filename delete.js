const dbconnect = require('./mongodb');

const deleteData = async ()=>{
    try{
        const db = await dbconnect();
        const filter = {
            name: "Suvo3"
        }
        const result = await db.deleteOne(filter);
        console.log('delete is ', result.deletedCount);
    } catch (error) {
        console.log('error is ', error);
    }
}
deleteData();