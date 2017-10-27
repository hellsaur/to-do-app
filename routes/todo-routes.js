const express = require('express');
const todoRouter = express.Router();

const todoController = require('../controllers/todo-controller');

todoRouter.get('/', todoController.index);



todoRouter.get('/new', (req,res)=> {
  res.render('toDoList/todo-new');
})

// todoRouter.get('/show', (req,res)=> {
//   res.render('toDoList/todo-show');
// })

todoRouter.get('/:id', todoController.show);
todoRouter.post('/', todoController.create);
todoRouter.get('/:id/edit', todoController.edit);
todoRouter.put('/:id', todoController.update);
todoRouter.delete('/:id', todoController.delete);

//user
// todoRouter.get('/', todoController.index);
// todoRouter.post('/', authHelpers.loginRequired, todoController.create);
//
// todoRouter.get('/add', authHelpers.loginRequired, (req, res) => {
//   res.render('todo/todo-new');
// });
//
// todoRouter.get('/:id', todoController.show);
// todoRouter.get('/:id/edit', authHelpers.loginRequired, todoController.edit);
// todoRouter.put('/:id', authHelpers.loginRequired, todoController.update);
// todoRouter.delete('/:id', authHelpers.loginRequired, todoController.delete);

module.exports = todoRouter;
