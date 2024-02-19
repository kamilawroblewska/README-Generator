// Packages needed for this application
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user input
const questions = [
    {
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the project about? Give a detailed description of your project.",
    name: "Description"
}, {
    type: "input",
    message: "What command should be run to install dependencies?",
    default: "npm i",
    name: "Installation"
}, {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "Usage"
}, {
    type: "checkbox",
    message: "Please select a license.",
    name: "License",
    choices: ["MIT", "Apache License 2.0", "Unlicense" ]
    // When the user has choosen a License then a correspoding Badge is generated near the top of the page
    // A notice explains which license the application is covered under License
}, {
    type: "input",
    message: "Who contributed to this project?",
    name: "Contributing"
}, {
    type: "input",
    message: "What commands are needed to test this app?",
    default: "npm test",
    name: "Tests"
}, {
    type: "input",
    message: "What is your Github username?",
    name: "Username"
}, {
    type: "input",
    message: "What is your email adress?",
    name: "Email"
},

];

// function to write README file
function writeToFile() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
    fs.writeFile("newREADME.md", generateMarkdown(data), (err) => {
        if (err) console.log(err);
        else console.log("Successfully created file! :)")
    });
    });
}

// function to initialize program
function init() {
    writeToFile();
}

// function call to initialize program
init();
