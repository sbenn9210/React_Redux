const express = require("express");
const router = express.Router();

//Task model
const Task = require("../../TaskSchema");

//@route GET api/items
//@desc GET all items
//@acess Public
router.get("/", (req, res) => {
  Task.find().then(task => res.json(task));
});

//@route POST api/items
//@desc Post a task
//@acess Public
router.post("/", (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    task: req.body.task
  });
  newTask.save().then(task => res.json(task));
});

module.exports = router;
