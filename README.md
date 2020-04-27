SQL Task

/*get all statuses, not repeating, alphabetically ordered*/

Select DISTINCT status from tasks 
order by status;

/*get the count of all tasks in each project, order by tasks count
descending*/

select count(tasks.id) ,projects.name from
tasks join projects on projects.id=projects_id
group by projects.name
order by 1 DESC;

/*get the count of all tasks in each project, order by projects
names*/

select count(tasks.id) ,projects.name from
tasks join projects on projects.id=projects_id
group by projects.name
order by 2 DESC;

/*get the tasks for all projects having the name beginning with
"N" letter*/

Select * from tasks
WHERE name LIKE 'N%';

/* get the list of all projects containing the 'a' letter in the middle of
the name, and show the tasks count near each project. Mention
that there can exist projects without tasks and tasks with
project_id = NULL */

SELECT projects.name,count(projects_id) as "Task Count"
from
tasks left JOIN projects on projects.id=projects_id
where projects.name LIKE '%a%'
group by projects.name
union
SELECT projects.name,count(projects_id)
from
tasks right JOIN projects on projects.id=projects_id
where projects.name LIKE '%a%'
group by projects.name;

/* get the list of tasks with duplicate names. Order alphabetically */

SELECT 
	*
FROM 
	projects
WHERE 
	name IN (SELECT name FROM projects GROUP BY name HAVING COUNT(*) > 1)
ORDER BY
	name;
  
/* get list of tasks having several exact matches of both name and
status, from the project 'Garage'. Order by matches count */

SELECT tasks.name 
	FROM tasks, projects 
	WHERE projects.id = tasks.projects_id 
	AND projects.name = "Garage" 
	GROUP BY tasks.name, status
	HAVING count(*) > 1;
  
/* get the list of project names having more than 10 tasks in status
'completed'. Order by project_id */

SELECT projects.name 
	FROM projects, tasks 
	WHERE projects.id = tasks.projects_id 
	AND status = "Completed" 
	GROUP BY status
	HAVING count(*) > 10;
