// Creaded inquirer package from npm
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Description",
    name: "description",
  },
  {
    type: "input",
    message: "Installation",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage",
    name: "usage",
  },
  {
    type: "input",
    message: "Contributing",
    name: "contributing",
  },
  {
    type: "input",
    message: "Tests",
    name: "tests",
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function(userInput) {
    const markdownString = generateMarkdown(userInput)
    // Moved function to write README file inside of the function to initialize app
    fs.writeFile("newREADME.md", markdownString, (err) =>
      err ? console.error(err) : console.log("success!")
    );
  });
}

// Function call to initialize app
init();
