-- More Quries
-- tasks assigned to users whose email ends with @spotify.com
SELECT task.title, user_task.user_id, user.email , user_task.task_id
	FROM task, user_task, user
    WHERE user.id = user_task.user_id
    AND task_id = user_task.task_id
    AND user.email LIKE '%@spotify.com';
-- Getting all tasks for 'DONALD DUCK' with status 'not started'
SELECT task.id, task.title, user.name, status.name
	FROM user, status, task, user_task
    WHERE user_task.user_id = task.id
    AND user_task.user_id = user.id
    AND user.name = 'Donald Duck'
    AND status.name = 'Not Started';
-- Get all the tasks for 'Maryrose Meadows' that were created in september
