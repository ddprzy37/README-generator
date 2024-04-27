function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3-Clause':
      return '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU GPLv3':
      return '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3-Clause':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`;
    case 'Apache 2.0':
      return `## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).`;
    case 'GNU GPLv3':
      return `## License

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).`;
    case 'BSD 3-Clause':
      return `## License

This project is licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).`;
    default:
      return '';
  }
}



//  function to generate markdown for README
function generateMarkdown(data, licenseBadge, answers) {
  const licenseSection = renderLicenseSection(data.license); // Generate license section
  const { indexRequired, motivation, problems, solve, learn, standOut } = answers; // Destructure user's answers
  return `# ${data.title}

${licenseBadge}

## Description

- Index Required: ${indexRequired}
- Motivation: ${motivation}
- Problems: ${problems}
- Solve: ${solve}
- Learn: ${learn}
- Stand Out: ${standOut}

## Table of contents

## Installation

## Usage

## Credits

${licenseSection}
`;
}

module.exports = {
  renderLicenseBadge,
  generateMarkdown,
  renderLicenseLink,
  renderLicenseSection
};
