// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    default:
      return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    default:
      return '';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license.`
  } else {
    return `There is no license for this project.`;
  }
}


//  function to generate markdown for README
function generateMarkdown(data, licenseBadge, answers) {
  const licenseSection = renderLicenseSection(data.license); // Generate license section
  const { indexRequired, motivation, problems, solve, learn, standOut } = answers; // Destructure user's answers
  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## User Answers

- Index Required: ${indexRequired}
- Motivation: ${motivation}
- Problems: ${problems}
- Solve: ${solve}
- Learn: ${learn}
- Stand Out: ${standOut}

${licenseSection}
`;
}

module.exports = {
  renderLicenseBadge,
  generateMarkdown,
  renderLicenseLink,
  renderLicenseSection
};
