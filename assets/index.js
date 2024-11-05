import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "../../readme-generator/assets/generateMarkdown.js";
import colors from 'colors';

const questions = [
    {
        type: 'input',
        message: 'Enter Project Title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Provide a step-by-step method on installing your project:',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Explain how to run your project:',
        name: 'usage'
    },
    {
        type: 'list',
        message: `Specify your project's license:`,
        name: 'license',
        choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3', 'N/A']
    },
    {
        type: 'input',
        message: 'How can others be involved in this project?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Provide examples on how to test this project:',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Input your GitHub username:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Input your email:',
        name: 'email'
    }
];

function writeFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Generating README...'));
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        writeFile('README.md', generateMarkdown({...responses}));
    });
}

init();