const mongoose = require('mongoose');

require('dotenv').config();


const connectMongoDB = async () => {
  try {

    const mongoURI = process.env.MONGO_URI;

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully');
  } catch (error) {

    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = { connectMongoDB };


// const mysql = require('mysql2/promise');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const mysqlPool = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE
// });

// const connectMongoDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1);
//   }
// };

// module.exports = { mysqlPool, connectMongoDB };