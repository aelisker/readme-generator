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
  },
  {
    type: 'confirm',
    name: 'confirmInstallationInstructions',
    message: 'Are there instructions needed for installation?',
    default: true
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter any commands needed for installation:',
    when: ({confirmInstallationInstructions}) => confirmInstallationInstructions
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions on how to use: (Required)',
    validate: use => {
      if (use) {
        return true;
      }
      else {
        console.log('Please provide basic intructions on how to use the application!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'licenses',
    message: 'Please choose an open source license',
    choices: ['MIT', 'GNU GPLv3', 'Others need adding'],
    default: 'MIT'
  },
  {
    type: 'confirm',
    name: 'confirmContributing',
    message: 'Would you like to add instructions for contributors?',
    default: true
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Add any instructions you have for contributors here:',
    when: ({confirmContributing}) => confirmContributing
  }
];

module.exports = questions;