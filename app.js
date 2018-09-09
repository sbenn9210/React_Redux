const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const app = express();
const Task = require("./TaskSchema");
//DB Config

const db = keys.mongoURI;

// Connect to MongoDB

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//Getting all the the tasks
app.get("/", (req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(404).json({ notasksfound: "No tasks found" }));
});

//posting a new task
app.post("/", (req, res) => {
  const NewTask = new Task({
    title: req.body.title,
    task: req.body.task
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
