const inquirer = require('inquirer')
const fs = require('fs')

const questionPrompt = () => {
    return inquirer.prompt ([
        {type: 'list'
        name: 'start'
        message: 'What would you like to do?'
        choices: ['']
    },

])

    .then

}
