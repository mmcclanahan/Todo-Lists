const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')

dotenv.config()

const app = express();

app.use(morgan('tiny'));

app.get('/todos', (req, res) => {
  res.send('todo list');
})

app.listen(process.env.PORT || 3000);