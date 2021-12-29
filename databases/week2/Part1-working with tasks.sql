SELECT * FROM status;
SELECT * FROM task;

-- Adding a task
INSERT INTO task (id, title, description, created, updated, due_date, status_id) values (36, "Fnish homework" , "do the homework and handin before deadline", now() , now(), null, 2);
-- Changing title of task
UPDATE task SET title = "Listen to music"
	WHERE id = 36;
-- Changing task due date
UPDATE task SET due_date = "2020-08-14"
	WHERE id = 36;
-- Changing task status
UPDATE task SET status_id = 2
	WHERE id = 36;
-- Marking task as complete
UPDATE task SET status_id = 3
	WHERE id = 36;
-- Deleting a task
DELETE FROM task WHERE id = 36;