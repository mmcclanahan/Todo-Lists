//routes requests to controllers

const express = require('express');
//import controllers
const { getTodos } = require('./controllers')
const router = express.Router();


router.get('/todos', getTodos);

module.exports = router;