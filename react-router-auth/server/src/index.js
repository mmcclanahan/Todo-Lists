const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./router');

dotenv.config()

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(router);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('starting on port', process.env.PORT)
  app.listen(process.env.PORT || 3000);
})