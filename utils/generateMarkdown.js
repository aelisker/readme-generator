const { genLicenseImg, genLicenseText } = require('./generateLicense');

const tableOfContentsInstall = instruct => {
  if (!instruct) {
    return ``;
  }
  return `* [Installation](#Installation)
  `
};
const installInstructions = instruct => {
  if (!instruct) {
    return ``;
  }
    return `
## Installation
Installation instructions listed below:
\`\`\`
${instruct}
\`\`\`
  `;
};

const tableOfContentsContribute = contributions => {
  if (!contributions) {
    return ``;
  }
  return `
* [Contributing](#Contributing)
  `
};
const contributeInstructions = contributions => {
  if (!contributions) {
    return ``;
  }
  return `
## Contributing
${contributions}
  `;
};

const tableOfContentsTests = tests => {
  if (!tests) {
    return ``;
  }
  return `
* [Tests](#Tests)
`
};
const testInstructions = tests => {
  if (!tests) {
    return ``;
  }
  return `
## Tests
${tests}
  `;
};

const emailInfo = emailAddress => {
  if (!emailAddress) {
    return `.`;
  }
  return ` and via email at [${emailAddress}](mailto:${emailAddress}).`;
};

// really useful markdown list found at https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
module.exports = generatedReadme => {
  const { installation, contribute, tests, email, ...necessary } = generatedReadme;
    return `# ${necessary.title} ${genLicenseImg(necessary.license)}

## Description
${necessary.description}

## Table of Contents
${tableOfContentsInstall(installation)}
* [Usage](#Usage)
${tableOfContentsContribute(contribute)}
* [License](#License)
${tableOfContentsTests(tests)}
* [Questions](#Questions)
${installInstructions(installation)}
## Usage
${necessary.usage}
${contributeInstructions(contribute)}
## License
${genLicenseText(necessary.license)}
${testInstructions(tests)}
## Questions
If you have any questions, you can find me at [${necessary.github}](https://github.com/${necessary.github})${emailInfo(email)}
    `;
};