function renderLicenseBadge(license) {
  if (license !== 'N/A') {
    return `![Github license](https://img.shields.io/badge/${license}-blue)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'N/A') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'N/A') {
    return `Licensed under the ${license} license.`
  }
  return 'No active license';
}

function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}

  # ${data.title}

## Description

${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

> ${data.install}

## Usage

> ${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

> ${data.test}

## Questions

Curious about anything?

Contact me at:

GitHub: [${data.github}](https://github.com/${data.github}) | Email: ${data.email}

`;
}

export default generateMarkdown;
