// const express = require('express');
// const dotenv = require('dotenv').config();
// const errorHandler = require('./middleware/errorHandler');
// const { connectMongoDB } = require('./config/db');
// const { createUserTable } = require('./models/mysql/user');

// const app = express();

// app.use(express.json());
// app.use('/api/users', require('./routes/userRoutes'));
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;

// const startServer = async () => {
//   try {
//     await connectMongoDB();
//     await createUserTable();
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   } catch (error) {
//     console.error('Server startup error:', error);
//     process.exit(1);
//   }
// };

// startServer();
