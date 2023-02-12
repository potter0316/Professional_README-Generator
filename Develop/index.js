// Creaded inquirer package from npm
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions =[
    {
        type: 'input',
        message: 'Description',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Installation?',
        name: 'password',
      },
      {
        type: 'input',
        message: 'Usage',
        name: 'confirm',
    },
    {
        type: 'input',
        message: 'Contributing',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Tests',
        name: 'password',
      },
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
