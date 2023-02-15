const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user - inside inquirer function
const userQuestions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'project-Title',
            message: 'What is your project title?', 
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description for your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How can your project be installed?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Credit other contributors or resources:',
        },
        {
            type: 'input',
            name: 'license',
            message: 'What license does your project have?',
        }

]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
