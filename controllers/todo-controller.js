const Todo = require('../models/todo');

const todoController = {};

todoController.index = (req,res) =>{
  Todo.findAll()
  .then(todos => {
    console.log(todos);
    res.render('toDoList/todo-index', {
      todos: todos,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

todoController.show = (req, res) => {
  Todo.findById(req.params.id)
  .then(todo => {
    res.render('toDoList/todo-show', {
      todo: todo,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

todoController.create = (req, res) => {
  Todo.create({
    title: req.body.title,
    description: req.body.description,
    done: req.body.done,
  }).then((todo) => {
    res.redirect(`/todo/${todo.id}`)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

todoController.update = (req, res) => {
  Todo.update({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done,
    }, req.params.id)
      .then((todo)=>{
        res.redirect(`/todo/${todo.id}`)
      }).catch(err => {
        console.log(err)
        res.status(500).json(err)
      });
};
todoController.edit = (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      res.render('toDoList/todo-edit', {
        todo: todo,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};


todoController.delete = (req,res) => {
  Todo.destroy(req.params.id)
  .then(()=>{
    res.redirect('/todo');
  }).catch(err =>{
    console.log(err);
    res.status(500).json(err)
  });
};




 module.exports = todoController;
