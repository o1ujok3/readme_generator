const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "Title",
  },
  {
    type: "input",
    message:
      "What is the project about? Give a detailed description of your project",
    name: "Description",
  },
  {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents",
  },
  {
    type: "input",
    message: "What does the user need to install to run this app?",
    name: "Installation",
  },
  {
    type: "input",
    message: "How is the app used? Give instructions",
    name: "Usage",
  },
  {
    type: "input",
    message: "What license is being used? (i.e. MIT)",
    name: "License",
  },
  {
    type: "input",
    message: "Who contributed to this project?",
    name: "Contributing",
  },
  {
    type: "input",
    message: "What commands are needed to test this app?",
    name: "Tests",
  },
  {
    type: "input",
    message: "Contact info for inquiries",
    name: "Questions",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data);
  });
}
// function call to initialize program
init();
