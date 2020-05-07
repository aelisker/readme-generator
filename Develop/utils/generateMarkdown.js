// const { writeFile, copyFile } = require('./creationModule');

const tableOfContentsInstall = instruct => {
  if (!instruct) {
    return '';
  }
  return `
    *[Installation](#Installation)
  `
};
const installInstructions = instruct => {
  if (!instruct) {
    return '';
  }
  return `
    ## Installation
    Installation instructions listed below:
    \`\`\`
    ${instruct}
    \`\`\`
  `;
};

// really useful markdown list found at https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
module.exports = generatedReadme => {
  const { installation, ...header } = generatedReadme;
    return `
    # ${header.title}

    ## Description
    ${header.description}

    ## Table of Contents
    ${tableOfContentsInstall(installation)}
    *[Usage](#Usage)

    *[License](#License)

    *[Contributing](#Contributing)

    *[Tests](#Tests)

    *[Questions](#Questions)
    ${installInstructions(installation)}
    ## Usage

    ## License

    ## Contributing

    ## Tests

    ## Questions
  `;
};