const Todo = require('../models/todo');

const todoController = {};

todoController.index = (req,res) =>{
  Todo.findAll()
  .then(task => {
    res.render('toDoList/todo-index', {
      data: task,

    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};
 module.exports = todoController;
