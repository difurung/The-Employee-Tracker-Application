const inquirer = require('inquirer')
const fs = require('fs')
const mysql = require('mysql2');
const { query } = require("express");
const conTab = require('console.table');
const db = require('./config/connection.js');

// this function will initiate the prompt 
const questionPrompt = () => {
  inquirer.prompt ([
        {type: 'list',
        name: 'start',
        message: 'What would you like to do?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit']
      },

])
// Switch statement for the user choices
    .then(choices => {
        switch (choices.start) {
          case "View All Departments":
            viewDepartments();
            break;
          case "View All Roles":
            viewRoles();
            break;
          case "View All Employees":
            viewEmployees();
            break;
          case "Add a Department":
            addDepartment();
            break;
          case "Add a Role":
            addRole();
            break;
          case "Add an Employee":
            addEmployee();
            break;
          case "Update an Employee Role":
            updateRole();
            break;
          case "Exit":
            db.end();
            return;
        }
    })
.catch((err) => {
    console.error(err);
});

function viewDepartments() {
    db.query ('SELECT * FROM department;',
    (err,results) =>{
        if (err) throw err;
        console.table(results);
        questionPrompt()
    });
}

function viewRoles() {
    db.query ('SELECT * from roles', 
    (err, results) => {
        if (err)throw err;
        console.table (results);
        questionPrompt()
    });
}

function viewEmployees() {
  db.query("SELECT * from employee", (err, results) => {
    if (err) throw err;
    console.table(results);
    questionPrompt();
  });
}


// doesn't work
function addDepartment() {
  db.query("SELECT * FROM department", function (err, results) {
    deptList = results.map((department) => {
      return {
        name: department.dept_name,
        value: department.id,
      };
    });
    inquirer
      .prompt([
        {
          type: "input",
          name: "dept_name",
          message: "Add new department",
        },
      ])
      .then((data) => {
        const sql = `INSERT INTO department SET ?`;
        db.query(sql, data, function (err, results) {
          if (err) throw err;
          console.log("New Department has been added.");
          questionPrompt();
        });
      });
  });
    
}

function addRole() {
  db.query("SELECT * FROM department", function (err, results) {
    deptList = results.map((department) => {
      return {
        name: department.dept_name,
        value: department.id,
      };
    });
    inquirer
      .prompt([
        {
          type: "input",
          message: "What type of role?",
          name: "title",
        },
        {
          type: "input",
          message: "What is the salary?",
          name: "salary",
        },
        {
          type: "list",
          message: "Which department does the role belong to?",
          name: "department_id",
          choices: deptList,
        },
      ])
      .then((data) => {
        const sql = `INSERT INTO roles SET ?`;
        db.query(sql, data, function (err, results) {
          if (err) throw err;
          console.log("New Role has been added.");
          questionPrompt();
        });
      });
  });
}  


function addEmployee() {
  db.query("SELECT id, first_name, last_name FROM employee", (err, results) => {
    empLi = results.map((employee) => {
      return {
        name: employee.first_name + "/" + employee.last_name,
        value: employee.id,
      };
    });
    empLi.push({ name: "None", value: "null" });
    db.query("SELECT id, title FROM roles", (err, results) => {
      roleLi = results.map((role) => {
        return {
          name: role.title,
          value: role.id,
        };
      });
      inquirer
        .prompt([
          {
            type: "input",
            message: "Employee's First Name?",
            name: "firstName",
          },
          {
            type: "input",
            message: "Employee's Last Name?",
            name: "lastName",
          },
          {
            type: "list",
            message: "Employee's Role?",
            name: "employeeRole",
            choices: roleLi,
          },
          {
            type: "list",
            message: "Employee's Manager?",
            name: "empManager",
            choices: empLi,
          },
        ])
        .then((data) => {
          let newEmp = data;
          let { firstName, lastName } = newEmp;
          db.query(
            "INSERT INTO employee SET ?",
            {
              first_name: firstName,
              last_name: lastName,
              roles_id: newEmp.employeeRole,
              manager_Id: newEmp.empManager,
            },
            (err, results) => {
              if (err) console.error(err);
              console.log("New Employee Added successfully.");
              questionPrompt();
            }
          );
        });
    });
  });
}


function updateRole() {
    db.query("SELECT id, title FROM roles", (err, results) =>{
        roleList = results.map((role) => {
        return { name: role.title, value: role.id };
        });
        db.query("SELECT id, first_name, last_name FROM employee",
        function (err, results) {
            empList = results.map((employee) => {
            return {
                name: employee.first_name + "/" + employee.last_name,
                value: employee.id,
            };
            });
    
    inquirer.prompt([
        {
        type: "list",
        message: "Select employee to update",
        name: "updateEmployee",
        choices: empList,
        },
        {
        type: "list",
        message: "Employees new role?",
        name: "newEmployeeRole",
        choices: roleList,
        },
        ])
        .then((data) => {
        db.query("UPDATE employee SET roles_Id = ? WHERE id = ?",
        [data.newEmployeeRole, data.updateEmployee],
        function (err, results) {
        console.log("Employee role is updated!");
        questionPrompt();
        });
    });
    });
});
}

}
questionPrompt()
