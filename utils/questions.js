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
    when: ({confirmInstallationInstructions}) => confirmInstallationInstructions,
    validate: install => {
      if (install) return true;
      else {
        console.log('Since you chose to enter installation instructions, you must enter something here.');
        return false;
      }
    }
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
    type: 'confirm',
    name: 'confirmContributing',
    message: 'Would you like to add instructions for contributors?',
    default: true
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Add any instructions you have for contributors here:',
    when: ({confirmContributing}) => confirmContributing,
    validate: cont => {
      if (cont) return true;
      else {
        console.log('Since you chose to add contribution instructions, you must enter something here.');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose an open source license',
    choices: ['MIT', 'GNU GPLv3', 'GNU APGLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache 2.0', 'Boost Software Licence 1.0', 'Unlicensed'],
    default: 'MIT'
  },
  {
    type: 'confirm',
    name: 'confirmTests',
    message: 'Would you like to add instructions on tests the user can run?',
    default: true
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Add any instructions you have for testing here:',
    when: ({confirmTests}) => confirmTests,
    validate: test => {
      if (test) return true;
      else {
        console.log('Since you chose to add example tests, you must enter something here.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
    validate: email => {
      if (email) return true;
      else {
        console.log('You must enter a GitHub username');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmContact',
    message: 'Would you like to add your email address as well?',
    default: true
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    when: ({confirmContact}) => confirmContact,
    validate: email => {
      if (email) return true;
      else {
        console.log('You must enter an email address');
        return false;
      }
    }
  }
];

module.exports = questions;