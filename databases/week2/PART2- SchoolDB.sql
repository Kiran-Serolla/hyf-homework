-- Created schooldatabase containing 'class' and 'student' tables

-- Creating Index on name column of the student table
CREATE INDEX sname ON student (name);
-- Adding new column to class table
ALTER TABLE class
	ADD status ENUM ( 'not-started', 'ongoing', 'finished') NOT NULL;