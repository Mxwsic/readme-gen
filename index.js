// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What is your project called?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please type what you would like as a description.',
    },

    {
        type: 'list',
        name: '',
        message: '',
    },

    {
        type: 'input',
        name: 'Email',
        message: 'What is  your email?',
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err): console.log('Your ReadMe file has been created'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInputs){
        writeToFile('ReadMe.md', generateMarkdown(userInputs));
    })
}

// Function call to initialize app
init();
