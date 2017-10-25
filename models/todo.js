const db = require('../db/config');

const Todo = {};

Todo.findAll = () => {
   return db.query('SELECT * FROM task');
};

module.exports = Todo;
