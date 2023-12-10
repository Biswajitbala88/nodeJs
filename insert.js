const dbconnect = require('./mongodb');

const insertData = async () => {
    try {
      const db = await dbconnect();
      
    
      const dataToInsert = [
        {
            name: 'Suvo3',
            email: 'suvo3@mail.com',
            age: 24
        },
        {
            name: 'Suvo 1',
            email: 'suvo1@mail.com',
            age: 25
        },
        {
            name: 'Suvo 2',
            email: 'suvo2@mail.com',
            age: 26
        }
      ];
  
      const result = await db.insertMany(dataToInsert);
      console.log('Data inserted:', result.insertedCount, 'record(s)');
    } catch (error) {
      console.error('Error inserting data:', error);
    }
};
insertData();