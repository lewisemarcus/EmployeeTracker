-- Updates the full_name column of the employees table -- 
UPDATE employees
SET full_name = CONCAT(first_name, ' ', last_name);

-- Alters manager column in employees table to reference a manager name from managers table --
ALTER TABLE employees
ADD FOREIGN KEY (manager_id) 
REFERENCES managers(manager_id)
ON DELETE SET NULL;

ALTER TABLE employees
ADD FOREIGN KEY (title_id)
REFERENCES titles(title_id)
ON DELETE SET NULL;

-- SHOW KEYS FROM employees WHERE Key_name = 'PRIMARY'; --

-- SHOW COLUMNS FROM employees; --

-- SHOW TABLES; --

-- SELECT * FROM employees; --