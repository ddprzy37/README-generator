// TODO: Create a function that returns a license badge based on which license is passed in
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
      case 'MIT':
          return '[MIT License](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
          return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
      // Add cases for other licenses as needed
      default:
          return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}

${licenseBadge}
`;
}

module.exports = {
  renderLicenseBadge,
  generateMarkdown,
  renderLicenseLink
};