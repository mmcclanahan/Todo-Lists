const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

const router = require('./router');

dotenv.config()

const app = express();

app.use(cors());
app.use(morgan('tiny'));

app.use(router);

app.listen(process.env.PORT || 3000);