const inquirer = require('inquirer')
const fs = require('fs')

// inquirer.prompt([{
//     type: "input",
//     name: "name",
//     prompt: "What is your name?"
// }]),

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    prompt: "What is your project name?"
}];

const promptQuestions = questions.map(({type, name, prompt}) => ({prompt}))

console.log(promptQuestions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();