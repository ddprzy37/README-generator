// Packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// Function to write README file
function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, (err) =>
        err ? console.error(err) : console.log('README file generated successfully!')
    );
}

// Creats an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is used?',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'BSD 3-Clause']
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Please enter the repo and file name like so: github_username/repo_name'
    },
    {
        type: 'checkbox',
        name: 'builtWith',
        message: 'Please select all software used to build this project.',
        choices: ['Next', 'React', 'Vue', 'Angular', 'Svelte','Laravel','Bootsrap','JQuery']
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of this project.'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was the motivation for this project?'
    },
    {
        type: 'input',
        name: 'problems',
        message: 'What problems did you face when building this project?'  
    },
    {
        type: 'input',
        name: 'solve',
        message: 'What does this project solve?'
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn making this project?'
    },
    {
        type: 'input',
        name: 'standOut',
        message: 'What makes your project stand out?'
    }
];
function init() {
    // Prompt the user with questions using inquirer
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers); // Log the answers object
            const selectedTechnologies = answers.builtWith;
            console.log(selectedTechnologies);
            const licenseBadge = generateMarkdown.renderLicenseBadge(answers.license);
            const content = generateMarkdown.generateMarkdown(answers, licenseBadge); // Pass 'answers' directly
            writeToFile('README.md', content);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Function call to initialize app
init();

