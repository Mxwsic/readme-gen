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
        type: 'input',
        name: 'installation',
        message: 'Are there any installation instructions you would like to provide',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What is the usaged of the application going to be',
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'Are there any contributors that you would like to include?',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Are there any specific testing instructions that you would like to include?',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to choose?',
        choices: [
            'MIT License',
            'Mozilla Public License 2.0',
            'Creative Commons Zero v1.0 Universal',
            'GNU General Public License',
            'No License'
        ]
    },

    {
        type: 'input',
        name: 'username',
        message: 'Please provide your github username.',
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
        writeToFile('testReadMe.md', generateMarkdown(userInputs));
    })
}

// Function call to initialize app
init();
