const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  "Title",
  "Description",
  "Installation",
  "Usage",
  "Contribution",
  "Tests",
];

const licenseQuestion = {
  type: "list",
  name: "License",
  message: "License",
  choices: [
    "Apache License, Version 2.0",
    "The MIT License",
    "Mozilla Public License 2.0 (MPL-2.0)",
  ],
};

const questionsArray = questions.map((it) => {
  return {
    type: "input",
    name: it,
    message: it,
  };
});

questionsArray.push(licenseQuestion);

async function askQuestions() {
  return await inquirer.prompt(questionsArray);
}

async function collectAnswersAndGenerate() {
  console.log("Answer some questions, dude.");
  const responses = await askQuestions();
  console.log("Generating HTML from template.");
  await generateReadMe(responses);
  console.log("All done, dude.");
}

async function generateReadMe(answers) {
  const templateDocument = await fs.promises.readFile(
    "/Users/samlaxton/Desktop/bootcamp/coding-ass/readme-generator/template-readme.md",
    "utf8"
  );
  const readMeProfile = templateDocument
    .replace("!", answers.Title)
    .replace("@", answers.Description)
    .replace("£", answers.Installation)
    .replace("%", answers.Usage)
    .replace("^", answers.Contribution)
    .replace("&", answers.Tests);
  await fs.promises.writeFile("readme.md", readMeProfile);
}

collectAnswersAndGenerate();
