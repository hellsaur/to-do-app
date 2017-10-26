const express = require('express');
const todoRouter = express.Router();

const todoController = require('../controllers/todo-controller');

todoRouter.get('/', todoController.index);



todoRouter.get('/new', (req,res)=> {
  res.render('toDoList/todo-new');
})

todoRouter.get('/show', (req,res)=> {
  res.render('toDoList/todo-show');
})

todoRouter.get('/:id', todoController.show);
todoRouter.post('/', todoController.create);
todoRouter.put('/', todoController.update);
todoRouter.delete('/:id', todoController.delete);

module.exports = todoRouter;
