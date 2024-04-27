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
        type: 'confirm',
        name: 'indexRequired',
        message: 'Does your project require an index file?',
        default: true 
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
        name: 'stand out',
        message: 'What makes your project stand out?'
    }
];

// Function to initialize app
function init() {
    // Prompt the user with questions using inquirer
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Sample data with user answers
            const data = {
                title: 'Sample Project',
                description: 'This is a sample project description.',
                license: 'Apache 2.0',
                ...answers // Merge user answers into the data object
            };
            // Generate markdown content based on the user's answers
            const licenseBadge = generateMarkdown.renderLicenseBadge(data.license);
            const content = generateMarkdown.generateMarkdown(data, licenseBadge, answers); // Pass answers to generateMarkdown
            // Call the writeToFile function to write the README file
            writeToFile('README.md', content);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


// Function call to initialize app
init();
