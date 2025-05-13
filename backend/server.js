const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectMongoDB } = require('./config/db');
const errorHandler = require('./middleware/errorHandler');


dotenv.config();


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));
app.use(express.static('public'));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use(require('./routes/continentsRoutes'));
app.use(require('./routes/countriesRoutes'));
app.use(require('./routes/placesVisitedRoutes'));


app.use(errorHandler);


const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {

    await connectMongoDB();

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {

    console.error('Server startup error:', error);
    process.exit(1);
  }
};


startServer();