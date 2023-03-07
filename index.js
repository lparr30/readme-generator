// DEPENDENCIES
const inquirer = require('inquirer');
const fs = require('fs');

// DATA
const questions = [
    {
        type: 'input',
        message: "What is the title of your README?",
        name: "title"
    },
    {
      type: 'input',
      message: "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide. What was your motivation? Why did you build this project? What problem does it solve? What did you learn?.",
      name: "description"
    },
    {
      type: 'input',
      message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      name: "installation"
    },
    {
      type: 'input',
      message: "Provide instructions and examples for use. Include screenshots as needed.",
      name: "usage"
    },
    {
      type: 'input',
      message: "List your collaborators, if any, with links to their GitHub profiles.If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.If you followed tutorials, include links to those here as well.",
      name: "credits"
    },
    {
      type: 'checkbox',
      message: "Which license does your repository use?",
      name: "license",
      choices: ["MIT", "Apache license 2.0", "Mozilla Public License 2.0"]
    },
    {
      type: 'input',
      message: "How can people contribute?",
      name: "contribution"
    },
    {
      type: 'input',
      message: "What are the tests that can be run for your application?",
      name: "tests"
    },
    {
      type: 'input',
      message: "Please enter your github.",
      name: "github",
    },
    {
      type: 'input',
      message: "Please enter your email.",
      name: "email",
    }
];

// FUNCTIONS
function writeToFile(answers) {
  console.log(typeof answers.license);
  const template = `# ${answers.title}

  ${licenseBadge(answers.license)}

  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#contribution)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  
  To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:
  
  ![alt text](assets/images/screenshot.png)
  
  ## Credits
  
  ${answers.credits}
  
  ## License
  
  ${answers.license}
  
  ---
  
  ## How to Contribute
  
  ${answers.contribution}
  
  ## Tests
  
  ${answers.tests}
  
  ## Questions
  
  You can reach me at [${answers.github}](https://github.com/${answers.github}) or via email at ${answers.email} with any questions regarding this repository.`;

  return template;
}

function licenseBadge(bananas) {
  console.log(bananas);
  if(bananas == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if(bananas == "Apache license 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (bananas == "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}

// USER INTERACTION
inquirer.prompt([...questions]).then((answers) => {
  const readme = writeToFile(answers);
  fs.writeFile('README.md', readme, 'utf8', (err) => {
    if (err) {
      return console.log(err)
   }
   console.log('README created :)')
  })
})
