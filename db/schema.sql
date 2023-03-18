DROP DATABASE IF EXISTS employee_db;
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;
CREATE DATABASE employee_db;

USE employee_db;
-- Creates the Department Table
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name varchar (30) NOT NULL
    
);

-- Creates the table for roles
CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE CASCADE
);

-- creates the employee table
-- May have to comment out the constraints
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT,
    -- CONSTRAINT fk_roles_id 
    -- FOREIGN KEY(roles_id)
    -- REFERENCES roles(id),
    -- ON DELETE CASCADE,
    manager_id INT
    -- CONSTRAINT fk_manager_id 
    -- FOREIGN KEY(manager_id)
    -- REFERENCES employee(id)
    -- ON DELETE SET NULL
);



