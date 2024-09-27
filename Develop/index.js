import inquirer from 'inquirer';
import fs from 'fs';

const generateREADME = ({ projectTitle, description, installation, usage, contributions, tests, license, githubUser, userEmail }) =>
  `# ${projectTitle}

![license](https://img.shields.io/badge/License-${license}-blue) 
[![dauntss](https://img.shields.io/badge/created_by-dauntss-deeppink)](http://github.com/dauntss)

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributions}

## License 

Licensed under ${license}

## Tests

${tests}

## Questions

Created by [${githubUser}](http://github.com/${githubUser}), [${userEmail}](mailto:${userEmail})`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description of project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage:',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'Contributions:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Tests:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['Apache', 'MIT', 'Unlicense', 'None'],
    },
    {
      type: 'input',
      name: 'githubUser',
      message: 'Github Username:',
    },
    {
      type: 'input',
      name: 'userEmail',
      message: 'Contact Email Address:',
    },
  ])
  .then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
