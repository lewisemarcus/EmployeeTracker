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

INSERT INTO managers (manager_name, manager_id)
VALUES ("Marcus Lewis", 1),
    ("Jessi Magana", 2),
    ("Rejean Chung", 3);

INSERT INTO employees (employee_id, first_name, last_name, title, title_id, manager, manager_id)
VALUES (1,"Marcus","Lewis","Lead Engineer", 1, null, null),
    (2,"Jason", "Yoo", "Sales Intern", 2, "Marcus Lewis", 1),
    (3, "Benjamin", "Wirth", "Sales Tech", 3, "Jessi Magana", 2),
    (4, "Rejean", "Chung", "Legal Team Manager", 5, null, null),
    (5, "Jessi", "Magana", "Sales Lead", 4, null, null);
