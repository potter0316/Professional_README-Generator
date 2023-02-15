// Creaded inquirer package from npm
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your repository",
    name: "title",
  },
  {
    type: "input",
    message: "Please describe your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What steps are needed to install the project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the expected output of the project?",
    name: "usage",
  },
  {
    type: "list",
    message: "license",
    name: "license",
    choices: ["MIT", "GPLv2", "Apache", "GPLv3", "other"]
  },
  {
    type: "input",
    message: "Any sources to site?",
    name: "contributing",
  },
  {
    type: "input",
    message: "Tests",
    name: "tests",
  },
  {
    type: "input",
    message: "Tests",
    name: "tests",
  },
  {
    type: "link",
    message: "Please enter your github username.",
    name: "questions",
  },

];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function(userInput) {
    // Moved function to write README file inside of the function to initialize app
    fs.writeFile("newREADME.md", generateMarkdown(userInput), (err) =>
      err ? console.error(err) : console.log("success!")
    );
  });
}

// Function call to initialize app
init();
