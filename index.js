// DEPENDENCIES
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { title } = require('process');

// DATA
// TODO: Create an array of questions for user input
// added spread operator to .prompt
const questions = [
    {
        type: 'input',
        message: "What is the title of your README?",
        name: "title"
    }
];

// FUNCTIONS
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
init() {}

// USER INTERACTION
inquirer
  .prompt([...questions]
    // pass your questions in here
  )
  .then((answers) => {
    // use user feedback for...whatever!
  })