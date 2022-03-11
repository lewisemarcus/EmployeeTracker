INSERT INTO departments (department_id, department_name)
VALUES (1,"Engineering"),
(2,"Finance"),
(3,"Legal"),
(4,"Sales"),
(5,"Service");
INSERT INTO titles (title_id, title_name, salary, department_id)
VALUES (1, "Lead Engineer", 170000, 1),
(2, "Sales Intern", 50000, 4),
(3, "Sales Tech", 90000, 4),
(4, "Sales Lead", 120000, 4),
(5, "Legal Team Mananger", 200000, 3);

INSERT INTO managers (manager_name)
VALUES ("Marcus Lewis"),
    ("Jessi Magana"),
    ("Rejean Chung");
INSERT INTO employees (employee_id, first_name, last_name, title, manager, department)
VALUES (1,"Marcus","Lewis","Lead Engineer", null, "Engineering"),
    (2,"Jason", "Yoo", "Sales Intern", "Marcus Lewis", "Sales"),
    (3, "Benjamin", "Wirth", "Sales Tech", "Jessi Magana", "Sales"),
    (4, "Rejean", "Chung", "Legal Team Manager", null, "Legal"),
    (5, "Jessi", "Magana", "Sales Lead", null, "Sales");
