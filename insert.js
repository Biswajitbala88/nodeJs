const dbconnect = require('./mongodb');

const insertData = async () => {
    try {
      const db = await dbconnect();
      
    
      const dataToInsert = {
        name: 'Suvo',
        email: 'suvo@mail.com',
        age: 22
      };
  
      const result = await db.insertOne(dataToInsert);
      console.log('Data inserted:', result.insertedCount, 'record(s)');
    } catch (error) {
      console.error('Error inserting data:', error);
    }
};
insertData();