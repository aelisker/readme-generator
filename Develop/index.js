const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./utils/questions');
const generatedReadme = require('./utils/generateMarkdown');

// function to write README file
const writeToFile = data => {
  fs.writeFile('./README.md', data, err => {
    if (err) {
      console.log(err);
      return;
    }
    else {
      console.log('Your README.md file has been successfully created. Check it out!');
    }
  })
}

inquirer.prompt(questions)
.then(answers => {
  return generatedReadme(answers);
})
.then(readmeContent => {
  return writeToFile(readmeContent);
})
.catch(err => {
  console.log(err);
});
