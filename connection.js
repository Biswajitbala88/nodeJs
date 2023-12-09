const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
// Database Name
const dbName = 'nodejs';

async function getData(){
    let result = await client.connect();
    let db = result.db(dbName);
    let collection = db.collection('user');
    let userdata = await collection.find({}).toArray();
    console.log(userdata);
}
getData();