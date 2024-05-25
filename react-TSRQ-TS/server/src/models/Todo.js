//imports the db and makes a todo model
const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  text: { type: String, unique: true },
  completed: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;