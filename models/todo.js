const db = require('../db/config');

const Todo = {};

Todo.findAll = () => {
   return db.query('SELECT * FROM task');
};

Todo.findById = (id) => {
  return db.oneOrNone(`
   SELECT * FROM task
   WHERE id = $1
    `, [id]);
};

Todo.create = todo => db.one(`
INSERT INTO task (
  title,
  description,
  done)
  VALUES(
  $/title/,
  $/description/,
  $/done/
) RETURNING *`,todo);

Todo.delete = id =>
db.none(`DELETE FROM task WHERE id = $1`, id)

Todo.update = (todo, id) =>
db.none(`
UPDATE task SET
title=$1,
description=$2,
done=$3
WHERE
id=$4
RETURNING *`,
[todo.title, todo.description, todo.done, id]);






module.exports = Todo;
