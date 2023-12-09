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

// In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available