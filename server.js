const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}`);
});
