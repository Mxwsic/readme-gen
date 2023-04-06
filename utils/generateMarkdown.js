// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
    case 'Creative Commons Zero v1.0 Universal':
      return 'https://creativecommons.org/publicdomain/zero/1.0/';
    case 'GNU General Public License':
      return 'https://opensource.org/licenses/gpl-license';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT License':
    case 'Mozilla Public License 2.0':
    case 'Creative Commons Zero v1.0 Universal':
    case 'GNU General Public License':
      return `License: ${license}`;
    case 'No License':
      return `No license`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'No license') {
    return 'No license';
  } else {
    return `More license information: ${renderLicenseLink}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - [Description]
    - [Installation]
    - [Usage]
    - [License]
    - [Contribution]
    - [Tests]
  ## Description
  ${data.description}
  ## Installation
  ${data.install}
  ## Usage 
  ${data.usage}
  ## Tests
  ${data.tests}
  ## Contributors
  ${data.contributors}
  ## Contact Me:
  * Github: https://github.com/${data.name}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
