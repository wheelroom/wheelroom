import { Questions } from 'inquirer'

export const questions = [
  {
    default: 'My new component',
    message: 'What is the name of the component?',
    name: 'componentName',
    type: 'input',
  },
  {
    choices: ['section', 'subPage', 'global'],
    message: 'What is the component wheelroom type?',
    name: 'wheelroomType',
    type: 'rawlist',
  },
  {
    default: 'author, bodyText, heading',
    message: `

This will setup required Symbol fields. Title and variation fields are always created.

What fields would you like to setup?`,
    name: 'componentFields',
    type: 'input',
  },
  {
    default: false,
    message: 'Do you need localized fields?',
    name: 'localizedFields',
    type: 'confirm',
  },
] as Questions
