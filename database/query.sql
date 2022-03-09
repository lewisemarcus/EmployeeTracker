-- Updates the full_name column of the employees table -- 
UPDATE employees
SET full_name = CONCAT(first_name, ' ', last_name);

-- Adds the employee id and full_name column as PRIMARY KEYS --
UPDATE employees
SET employee_info = CONCAT(employee_id, ', ', full_name);

ALTER TABLE employees
ADD CONSTRAINT employee_info 
PRIMARY KEY (employee_id, full_name);

-- Adds AUTO_INCREMENT after making employee_id PRIMARY KEY --
ALTER TABLE employees
MODIFY employee_id INT NOT NULL AUTO_INCREMENT;

-- Alters manager_id and manager_ref column from managers table to reference the employee_id and full_name from employees table --
ALTER TABLE managers
ADD FOREIGN KEY (manager_id, manager_ref) 
REFERENCES employees(employee_id, full_name);

-- Updates manager_name to be manager_ref, for referencing manager name in employees table -- 
UPDATE managers
SET manager_name = REPLACE(manager_name, manager_name, manager_ref);

-- Alters manager column in employees table to reference a manager name from managers table --
ALTER TABLE employees
ADD FOREIGN KEY (manager) 
REFERENCES managers(manager_name)
ON DELETE SET NULL;

-- SHOW KEYS FROM employees WHERE Key_name = 'PRIMARY'; --

-- SHOW COLUMNS FROM employees; --

-- SHOW TABLES; --

SELECT * FROM employees;