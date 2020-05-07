const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your name? (Required)'
  }
];

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
  return generateMarkdown(answers);
})
.then(readmeContent => {
  return writeToFile(readmeContent);
})
.catch(err => {
  console.log(err);
});
