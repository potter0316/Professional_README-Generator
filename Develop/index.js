// Creaded inquirer package from npm
const inquirer = require('inquirer');
const fs = require('fs');
const { rejects } = require('assert');
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
fs.writeToFile('newREADME.md', process.argv[2], (err) =>
    err ? console.error(err) : console.log('success!'));

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
