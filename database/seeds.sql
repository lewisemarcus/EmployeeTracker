INSERT INTO departments (department_id, department_name)
VALUES (1,"Engineering"),
(2,"Finance")
(3,"Legal")
(4,"Sales")
(5,"Service");
INSERT INTO managers (manager_name)
VALUES ("Marcus Lewis");
INSERT INTO employees (employee_id, first_name, last_name, title, manager, department)
VALUES (1,"Marcus","Lewis","Lead Engineer", null, "Engineering"),
    (2,"Jason", "Yoo", "Intern", "Marcus Lewis", "Sales");
