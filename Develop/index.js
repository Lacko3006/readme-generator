const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    "What is your project title?",
    "What is the best way to describe your project?",
    "What are the installation instructions for your project?",
    "What is the usage information you would like to provide?",
    "What are your contribution guidelines?",
    "What are the test instructions?",
]

const questionsArray = questions.map(it => {
    return {
        type: "input",
        name: it,
        message: it,
    };
})

async function askQuestions() {
    return await inquirer.prompt(questionsArray)
}

askQuestions()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();