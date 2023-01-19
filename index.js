const inquirer = require('inquirer')
const fs = require('fs')
const mysql = require('mysql2');
const conTab = require('console.table');


// this function will initiate the prompt 
const questionPrompt = () => {
    return inquirer.prompt ([
        {type: 'list',
        name: 'start',
        message: 'What would you like to do?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit']

    },

])
// Switch staatement for the user choices
    .then(answer => {
        switch(choice.start) {
            case 'View All Departments':
                viewDepartments();
            case 'View All Roles':
                viewRoles();
            case 'View All employees':
                viewEmployees();
            case 'Add Department':
                addDepartment();
            case 'Add Role':
                addRole();
            case 'Add an Employee':
                addEmployee();
            case 'Update Employee Role':
                updateRole();
            case 'Exit':
                quit();
                return
        }
    })
.catch((err) => {
    console.error(err);
});

}
