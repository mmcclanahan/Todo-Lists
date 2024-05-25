//import models and make controller functions that will
//manipulate the db using the modelsfor each request here
//could split each one into seperate files too
const Todo = require("../models/Todo");

module.exports = async (req, res) => {
  try {
    const todos = await Todo.find({}).exec();
    res.status(200).send(todos);
  } catch (err) {
    res.status(500).send("Failed to get from model:" + err);
  }
};
