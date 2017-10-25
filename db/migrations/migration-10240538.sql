 -- \c my_todolist
DROP TABLE IF EXISTS task;
CREATE TABLE IF NOT EXISTS task
(id SERIAL PRIMARY KEY,
 title TEXT,
 description VARCHAR(255),
done BOOLEAN
);
