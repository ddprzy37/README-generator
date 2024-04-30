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
function generateBuiltWithSection(technologies) {
  const technologyUrls = {
    Next: 'https://nextjs.org/',
    React: 'https://reactjs.org/',
    Vue: 'https://vuejs.org/',
    Angular: 'https://angular.io/',
    Svelte: 'https://svelte.dev/',
    Laravel: 'https://laravel.com/',
    Bootstrap: 'https://getbootstrap.com/',
    JQuery: 'https://jquery.com/'
  };

  let builtWithSection = '### Built With\n\n';

  technologies.forEach(tech => {
    if (technologyUrls.hasOwnProperty(tech)) {
      builtWithSection += `* [${tech}](${technologyUrls[tech]})\n`;
    }
  });

  return builtWithSection;
}

// const selectedTechnologies = answers.builtWith; // Assign user input to selectedTechnologies

// Function to generate markdown for README
function generateMarkdown(data, licenseBadge) {
  // Destructure properties directly from the 'data' object
  const { repo, motivation, problems, solve, learn, standOut, description, license, builtWith } = data;

  // Generate license section dynamically based on user's choice
  const licenseSection = license ? `## License\n\nThis project is licensed under the [${license} License](${renderLicenseLink(license)}).` : '';
  const builtWithSection = generateBuiltWithSection(builtWith); // Use 'builtWith' from 'data'
  console.log(builtWithSection);
  return `# ${data.title}

${licenseBadge}
<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/${repo}">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">${data.title}</h3>

  <p align="center">
    ${data.description}
    <br />
    <a href="https://github.com/${repo}/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/${repo}/">View Demo</a>
    ·
    <a href="https://github.com/${repo}/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/${repo}/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

## Description

${description}

- Motivation: ${motivation}
- Problems: ${problems}
- Solve: ${solve}
- Learn: ${learn}
- Stand Out: ${standOut}

[![Product Name Screen Shot](./images/screenshot.png)](https://example.com)

${builtWithSection}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following:

## Table of contents
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

## Installation
1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   \`\`\`sh
   git clone https://github.com/${repo}.git
   \`\`\`
3. Install NPM packages
   \`\`\`sh
   npm install
   \`\`\`
4. Enter your API in \`config.js\`
   \`\`\`js
   const API_KEY = 'ENTER YOUR API';
   \`\`\`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/${repo}/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

${licenseSection}


## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/${repo}](https://github.com/${repo})

<p align="right">(<a href="#readme-top">back to top</a>)</p>


`;
}



module.exports = {
  renderLicenseBadge,
  generateMarkdown,
  renderLicenseLink,
  renderLicenseSection,
  generateBuiltWithSection
};
