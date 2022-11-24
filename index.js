const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  "Title",
  "Description",
  "Installation",
  "Usage",
  "Contributing",
  "Tests",
  "GitHub",
  "Email"
];

const licenseQuestion = {
  type: "list",
  name: "License",
  message: "License",
  choices: [
    "Apache License, Version 2.0",
    "The MIT License",
    "Eclipse Public License",
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
  let readMeProfile = templateDocument
    .replace("+", answers.Title)
    .replace("@", answers.Description)
    .replace("$", answers.Installation)
    .replace("%", answers.Usage)
    .replace("^", answers.Contributing)
    .replace("&", answers.Tests)
    .replace("?", answers.GitHub)
    .replace("=", answers.Email)
    if (answers.License === "Apache License, Version 2.0"){ 
    readMeProfile = readMeProfile.replace("*", "The Apache Software Foundation uses various licenses to distribute software and documentation, and to accept regular contributions from individuals and corporations and larger grants of existing software products. These licenses help us achieve our goal of providing reliable and long-lived software products through collaborative, open-source software development. In all cases, contributors retain full rights to use their original contributions for any other purpose outside of Apache while providing the ASF and its projects the right to distribute and build upon their work within Apache.")
    .replace("§", "https://shields.io/badge/license-Apache-blue")
    }
    if (answers.License === "The MIT License"){
      readMeProfile = readMeProfile.replace("*", "The MIT license gives users express permission to reuse code for any purpose, sometimes even if code is part of proprietary software. As long as users include the original copy of the MIT license in their distribution, they can make any changes or modifications to the code to suit their own needs.")
      .replace("§", "https://img.shields.io/badge/license-MIT-green")
    }
    if (answers.License === "Eclipse Public License"){
      readMeProfile = readMeProfile.replace("*", "The Eclipse Public License is a free and open source software license most notably used for the Eclipse IDE and other projects by the Eclipse Foundation. It replaces the Common Public License and removes certain terms relating to litigations related to patents.")
      .replace("§", "https://img.shields.io/badge/eclipse%20marketplace-v1.0.1-blue")
    }
    await fs.promises.writeFile("readme.md", readMeProfile);
}

collectAnswersAndGenerate();
