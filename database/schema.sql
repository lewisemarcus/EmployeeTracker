DROP DATABASE IF EXISTS employees_db;

-- Creates employee database -- 
CREATE DATABASE employees_db;
USE employees_db;

-- Creates employee table with employee's first name, last name, title, id, salary, department, and manager(if applicable) --
DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
    employee_id INT NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    manager VARCHAR(100),
    salary INT NOT NULL,
    department VARCHAR(100) NOT NULL,
    full_name VARCHAR(400) DEFAULT ' ',
    employee_info VARCHAR(100)
);

-- Creates department table with department's name and id --
DROP TABLE IF EXISTS departments;
CREATE TABLE departments (
    department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL
);

-- Creates title table with title's id, name, department the title is under, and salary --
DROP TABLE IF EXISTS titles;
CREATE TABLE titles (
    title_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_id INT,
    FOREIGN KEY (department_id) 
    REFERENCES departments(department_id)
    ON DELETE SET NULL
);

-- Creates a table of managers from the employee table with manager's name and id ADD AUTO_INC --
DROP TABLE IF EXISTS managers;
CREATE TABLE managers (
    manager_name VARCHAR(100) PRIMARY KEY,
    manager_ref VARCHAR(100),
    manager_id INT
);

SOURCE seeds.sql;

-- Updates the full_name column of the employees table -- 
UPDATE employees
SET full_name = CONCAT(first_name, ' ', last_name);

-- Adds the employee id and full_name column as PRIMARY KEYS --
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