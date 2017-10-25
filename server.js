const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}`);
});

app.get('/',(req,res) => {
  res.send('Hello World');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const todoRoutes = require('./routes/todo-routes');
app.use('/todo', todoRoutes);

app.use('*', (req,res) => {
  res.status(404).send('Not Found.');
});
