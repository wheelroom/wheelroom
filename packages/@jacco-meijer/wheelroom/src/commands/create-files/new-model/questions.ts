import { Questions } from 'inquirer'

export const questions = [
  {
    default: 'My new component',
    message: 'What is the name of the component?',
    name: 'componentName',
    type: 'input',
  },
  {
    choices: ['section', 'subPage', 'part', 'global'],
    message: `
    
Section: defines fields and can be used as a page section. A section is a part of a page
         and has no query
Part:    simular to a section, but cannot be used as a section, mostly this is a part of
         a section
SubPage: defines fields and a query, if the slug field matches, the page is fetched
Global:  defines fields and a query, always fetched and added to every page

What is the component wheelroom type?`,
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
