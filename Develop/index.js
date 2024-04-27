// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const licenseBadge = generateMarkdown.renderLicenseBadge(data.license); // Generate license badge dynamically
    const content = generateMarkdown.generateMarkdown(data, licenseBadge); // Generate markdown content
    fs.writeFile(fileName, content, (err) =>
        err ? console.error(err) : console.log('README file generated successfully!')
    );
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const data = {
    title: 'Sample Project',
    description: 'This is a sample project description.',
    license: 'MIT'
};
writeToFile('README.md', data)