const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  "Title",
  "Description",
  "Installation",
  "Usage",
  "Contribution",
  "Test",
];

const licenseQuestion = {
    type: "list",
    name: "license",
    message: "License"
    choices: [

    ]
}

questionsArray.push(licenseQuestion)

const questionsArray = questions.map(it => {
  return {
    type: "input",
    name: it,
    message: it,
  };
});

// async function askQuestions() {
//   return await inquirer.prompt(questionsArray);
// }

async function collectAnswersAndGenerate() {
    console.log('Answer some questions, dude.')
    const responses = await askQuestions(dummyAnswers)
    console.log('Generating HTML from template.')
    await generateReadMe(responses)
    console.log('All done, dude.')
  }

async function generateReadMe(answers) {
    const templateDocument = await fs.promises.readFile('/Users/samlaxton/Desktop/bootcamp/coding-ass/readme-generator/template-readme.md', 'utf8')
    const readMeProfile = templateDocument
      .replace('!', answers.Title)
      .replace('@', answers.Description)
      .replace('£', answers.Installation)
      .replace('$', answers.Usage)
      .replace('%', answers.Contribution)
    await fs.promises.writeFile('readme.md', readMeProfile)
  }

const dummyAnswers = {
    Title: "hello",
  Description: "yes",
  Installation: "how",
  Usage: "no",
  Contribution: "okay",
  Test: "what",
}

collectAnswersAndGenerate()