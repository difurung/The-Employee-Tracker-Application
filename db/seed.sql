INSERT INTO department (id, dept_name)
VALUES (1, 'Front Desk'),
       (2, 'Nursing'),
       (3, 'Laboratory'),
       (4, 'Billing'),
       (5, 'Physician Staff'),
       (6, 'Office Management');

INSERT INTO roles (id, title, salary, department_id) 
VALUES (1, 'Receptionist', 35000, 1),
       (2, 'Nurse Practicioner', 150000, 2),
       (3, 'Registered Nurse', 65000, 2),
       (4, 'Medical Biller', 50000, 4),
       (5, 'Physician', 250000, 5),
       (6, 'Medical Assistant', 35000, 2),
       (7, 'Medical Technologist', 55000, 3),
       (8, 'Clinical Manager', 100000, 6);

INSERT INTO employee (id, first_name, last_name, roles_id, manager_id) 
VALUES (1, 'Denart', 'Ifurung', 5, 6 ),
       (2, 'Edwin', 'Pietrowski', 3, 6 ),
       (3, 'Charles', 'Beatty', 5, 6 ),
       (4, 'Darren', 'Ifurung', 6, 6 ),
       (5, 'Yonatan', 'Bermudez', 4, 6 ),
       (6, 'Maria', 'Cruz', 2, 6),
       (7, 'Janet', 'Reno',1, 6 ),
       (8, 'Rukia', 'Kuchiki', 7, 6),
       (9, 'Riza', 'Hawkeye', 8, 6);
       

