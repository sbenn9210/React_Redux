const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: String,
  author: String,
  task: String
});

module.exports = Task = mongoose.model("Task", TaskSchema);
