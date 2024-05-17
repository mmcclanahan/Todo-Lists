const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  //in real app need to limit whats coming back
  const todos = await TodoModel.find();
  res.send(todos)
}