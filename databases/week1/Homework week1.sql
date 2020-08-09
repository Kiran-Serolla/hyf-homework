-- Task1 -- how many rows are there in 
SELECT COUNT(title) 
	FROM task;
SELECT * FROM TASK;


-- Task2 --Counting the no. of tasks without valid due date
SELECT COUNT(title) FROM task WHERE due_date  IS NULL;

-- Task3--Finding the tasks maked done
SELECT title FROM task WHERE status_id =3;
-- Task4 --Finding tasks that are not marked as done
SELECT title FROM task WHERE status_id !=3;
-- Task5 -- Get all the tasks, sorted with the most recently created first
SELECT title FROM task ORDER BY created desc;
-- Task6 --Get the single most recently created task
SELECT title FROM task ORDER BY created desc LIMIT 1;
-- Task7 -- Get the title and due date of all tasks where the title or description contains database
SELECT  title,due_date FROM task 
WHERE title LIKE '%database%' or description LIKE '%database%';
-- Task8 -- Get the title and status (as text) of all tasks
 SELECT task.title,status.name FROM task JOIN status ON task.status_id=status.id;
 -- task 9 -- Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(task.id) Count FROM status JOIN task ON task.status_id=status.id GROUP BY status.id;
-- task 10 --Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name Name, COUNT(task.id) Count FROM status JOIN task ON task.status_id=status.id GROUP BY status.id ORDER BY COUNT(task.id) DESC;


    


    