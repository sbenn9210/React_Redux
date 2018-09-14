const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const app = express();
const Task = require("./TaskSchema");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");
//DB Config

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const db = keys.mongoURI;

// Connect to MongoDB

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//Use routes
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
