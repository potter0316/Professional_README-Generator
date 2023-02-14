// Creaded inquirer package from npm
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown  = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions =[
    {
        type: 'input',
        message: 'Description',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Installation',
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



// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function(userInput) {
   // Moved function to write README file inside of the function to initialize app
    fs.writeToFile('newREADME.md', generateMarkdown(userInput), (err) =>
    err ? console.error(err) : console.log('success!'));
    })
}

// Function call to initialize app
init();
