const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');
const router = express.Router();

const loginRoute = require('./routes/loginRoute');

const readTodoRoute = require('./routes/readTodosRoute');
const createTodoRoute = require('./routes/createTodoRoute');
const updateTodoRoute = require('./routes/updateTodoRoute');
const deleteTodoRoute = require('./routes/deleteTodoRoute')

router.post('/login', loginRoute);

router.get('/todos', isLoggedIn, readTodoRoute);
router.post('/todos', isLoggedIn, createTodoRoute);
router.put('/todos/:id', isLoggedIn, updateTodoRoute);
router.delete('/todos/:id', isLoggedIn, deleteTodoRoute);

module.exports = router;