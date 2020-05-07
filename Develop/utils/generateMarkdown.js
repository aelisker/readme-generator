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
  // need to figure out how to use indents for structure while printing proper spaces on README
  return `
    ## Installation
    Installation instructions listed below:
    \`\`\`${instruct}\`\`\`
  `;
};

const tableOfContentsContribute = contributions => {
  if (!contributions) {
    return '';
  }
  return `
  *[Contributing](#Contributing)
  `
};
const contributeInstructions = contributions => {
  if (!contributions) {
    return '';
  }
  return `
    ## Contributing
    ${contributions}
  `;
};

// really useful markdown list found at https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
module.exports = generatedReadme => {
  const { installation, contribute, ...necessary } = generatedReadme;
    return `
      # ${necessary.title}

      ## Description
      ${necessary.description}

      ## Table of Contents
      ${tableOfContentsInstall(installation)}
      *[Usage](#Usage)

      *[License](#License)
      ${tableOfContentsContribute(contribute)}
      *[Tests](#Tests)

      *[Questions](#Questions)
      ${installInstructions(installation)}
      ## Usage
      ${necessary.usage}

      ## License
      ${necessary.licenses}
      ${contributeInstructions(contribute)}
      ## Tests

      ## Questions
    `;
};