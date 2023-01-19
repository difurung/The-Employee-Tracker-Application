DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;
-- Creates the Department Table
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar (30),
    ON DELETE CASCADE
);

-- Creates the table for roles
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar (30),
    salary DECIMAL,
    department_id int,
    FOREIGN KEY (department_id),
    REFERENCES (department_id),
    ON DELETE CASCADE
);

-- creates the employee table
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name varchar (30),
    last_name varchar (30),
    role_id INT,
    manager_id INT,
    department_id INT,
    FOREIGN KEY (role_id),
    REFERENCES (roles_id),
    FOREIGN KEY (manager_id),
    REFERENCES (employee_id),
    ON DELETE CASCADE
);


