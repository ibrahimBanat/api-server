'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const foodRoute = require('./routes/food');
const clothesRoute = require('./routes/food');
const logger = require('./middleware/logger');

app.use(logger);
app.use(express.json());
app.use(cors());

app.get('/', rootHandler);
app.use('/api/v1/food', foodRoute);
app.use('/api/v1/clothes', clothesRoute);
app.use(errorHandler);
app.use('*', notFoundHandler);

function rootHandler(req, res) {
  res.json('hello i am working');
}

module.exports = {
  server: app,
  start: function start(port) {
    let PORT = port || 3000;
    app.listen(PORT, () => {
      console.log('app is working . . ');
      console.log(`app is running http://localhost:${PORT}`);
    });
  },
};
