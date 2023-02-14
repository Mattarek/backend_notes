const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { port } = require("./app/config");
const apiRouter = require("./app/routes/api");

// db
require("./app/db/mongoose.js");

// Content-type: application/json;
app.use(bodyParser.json());

// fix cors
app.use(cors());

app.use("/api/", apiRouter);

app.listen(port, () => {
  console.log(`Działam na porcie: ${port}`);
});
