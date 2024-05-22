const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await TodoModel.findById(id);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    await todo.deleteOne();

    // Respond with 204 No Content if no data is being returned
    res.status(204).end();

    // If you want to respond with the deleted todo data, consider:
    // res.status(200).json(todo);

  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};