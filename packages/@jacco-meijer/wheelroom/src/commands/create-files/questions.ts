import { Questions } from 'inquirer'

export const questions = [
  {
    default: 'My new component',
    message: 'What is the name of the component?',
    name: 'componentName',
    type: 'input',
  },
  {
    choices: ['Section', 'Content', 'Global', 'Page'],
    message: 'What is the component type?',
    name: 'componentType',
    type: 'rawlist',
  },
  {
    default: 'heading, bodyText, author',
    message: `

This will setup required Symbol fields. Title and variation fields are always created.

What fields would you like to setup?`,
    name: 'componentFields',
    type: 'input',
  },
] as Questions
