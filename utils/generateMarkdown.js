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
    return `## Installation
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
  return `* [Contributing](#Contributing)
  `
};
const contributeInstructions = contributions => {
  if (!contributions) {
    return ``;
  }
  return `## Contributing
${contributions}
  `;
};

const tableOfContentsTests = tests => {
  if (!tests) {
    return ``;
  }
  return `* [Tests](#Tests)
  `
};
const testInstructions = tests => {
  if (!tests) {
    return ``;
  }
  return `## Tests
${tests}
  `;
};

const emailInfo = emailAddress => {
  if (!emailAddress) {
    return `.`;
  }
  return ` and via email at [${emailAddress}](mailto:${emailAddress}).`;
};

const licenseImg = license => {
  if (license === 'MIT') {
    return `
![MIT-license](./img/license-MIT-brightgreen.svg)
    `;
  }
  else if (license === 'GNU GPLv3') {
    return `
![GNU-GPLv3-license](./img/license-GNU-GPLv3-blue.svg)
    `
  }
  else if (license === 'GNU AGPLv3') {
    return `
![GNU-AGPLv3-license](./img/license-GNU-AGPLv3-blue.svg)
    `
  }
  else if (license === 'GNU LGPLv3') {
    return `
![GNU-LGPLv3-license](./img/license-GNU-LGPLv3-blue.svg)
    `
  }
  else if (license === 'Mozilla Public License 2.0') {
    return `
![license-Mozilla-Public-License 2.0-orange](./img/license-Mozilla-Public-License-2.0-orange.svg)
    `
  }
  else if (license === 'Apache 2.0') {
    return `
![license-Apache-2.0-yellow](./img/license-Apache-2.0-yellow.svg)
    `
  }
  else if (license === 'Boost Software Licence 1.0') {
    return `
![license-Boost-Software-Licence-1.0-yellowgreen](./img/license-Boost-Software-Licence-1.0-yellowgreen.svg)
    `
  }
  else if (license === 'Unlicensed') {
    return `
![license-Unlicensed-lightgrey](./img/license-Unlicensed-lightgrey.svg)
    `
  }
};

// really useful markdown list found at https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
module.exports = generatedReadme => {
  const { installation, contribute, tests, email, license, ...necessary } = generatedReadme;
    return `${licenseImg(license)}
# ${necessary.title}

## Description
${necessary.description}
## Table of Contents
${tableOfContentsInstall(installation)}
* [Usage](#Usage)

* [License](#License)
${tableOfContentsContribute(contribute)}
${tableOfContentsTests(tests)}

* [Questions](#Questions)
${installInstructions(installation)}
## Usage
${necessary.usage}

## License
${necessary.license}

${contributeInstructions(contribute)}
${testInstructions(tests)}
## Questions
If you have any questions, you can find me at [${necessary.github}](https://github.com/${necessary.github})${emailInfo(email)}
    `;
};