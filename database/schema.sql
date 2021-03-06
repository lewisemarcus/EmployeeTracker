DROP DATABASE IF EXISTS employees_db;

-- Creates employee database -- 
CREATE DATABASE employees_db;
USE employees_db;

-- Creates employee table with employee's first name, last name, title, id, salary, department, and manager(if applicable) --
DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
    employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    title_id INT,
    manager VARCHAR(100),
    manager_id INT,
    full_name VARCHAR(400) DEFAULT ' '
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
    title_name VARCHAR(400),
    salary INT NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) 
    REFERENCES departments(department_id)
    ON DELETE SET NULL
);

-- Creates a table of managers from the employee table with manager's name and id ADD AUTO_INC --
DROP TABLE IF EXISTS managers;
CREATE TABLE managers (
    manager_name VARCHAR(100),
    manager_id INT AUTO_INCREMENT PRIMARY KEY
);

SOURCE seeds.sql;

SOURCE query.sql;