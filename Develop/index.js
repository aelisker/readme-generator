const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: title => {
      if (title) {
        return true;
      }
      else {
        console.log ('Your README file needs a title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please give a brief description of this repository: (Required)',
    validate: desc => {
      if (desc) {
        return true;
      }
      else {
        console.log('You must have a description of your project, even if it\'s only a few words!');
        return false;
      }
    }
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
