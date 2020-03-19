export const writeFileQuestions = [
  {
    choices: [
      {
        key: 'y',
        name: 'Yes',
        value: 'y',
      },
      {
        key: 'n',
        name: 'No',
        value: 'n',
      },
      {
        key: 'a',
        name: 'All, this one and all next',
        value: 'a',
      },
      {
        key: 'q',
        name: 'Quit',
        value: 'q',
      },
    ],
    default: 'n',
    message: 'Overwrite?`:',
    name: 'policy',
    type: 'expand',
  },
] as any
