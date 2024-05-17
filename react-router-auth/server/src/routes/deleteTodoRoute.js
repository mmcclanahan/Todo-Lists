const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  const {id} = req.params;
  const todo = await TodoModel.findById(id);
  await todo.deleteOne({id: id});
  res.status(204).json(todo);
}