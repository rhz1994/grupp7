const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

const placesVisitedRoutes = require("./routes/placesVisitedRoutes");
const continentsRoutes = require("./routes/continentsRoutes")

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(express.static("public"));

app.use(placesVisitedRoutes);

app.use(continentsRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
