const express = require("express");
const cors = require("cors");
const connectionMongoDB = require("./connectionMongoDB");

const app = express();
const port = 3000;

const placesVisitedRoutes = require("./routes/placesVisitedRoutes");
const continentsRoutes = require("./routes/continentsRoutes");
const countriesRoutes = require("./routes/countriesRoutes");
const userRoutes = require("./routes/userRoutes");
const countryInfoRoutes = require("./routes/countryInfoRoutes");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "*" }));

app.use(express.static("public"));

app.use(placesVisitedRoutes);

app.use(continentsRoutes);

app.use(countriesRoutes);

app.use(userRoutes);

app.use(countryInfoRoutes);

connectionMongoDB();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
