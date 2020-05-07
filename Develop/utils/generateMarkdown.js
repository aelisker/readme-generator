// function to generate markdown for README
// really useful markdown list found at https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
function generateMarkdown(data) {
  return `
    # ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents
    *[Installation](Installation)
    *[Usage](Usage)
    *[License](License)
    *[Contributing](#Contributing)
    *[Tests](Tests)
    *[Questions](#Questions)

    ## Installation

    ## Usage

    ## License

    ## Contributing

    <a name="tests"/>
    ## Tests

    <a name="questions"/>
    ## Questions


`;
}

module.exports = generateMarkdown;
