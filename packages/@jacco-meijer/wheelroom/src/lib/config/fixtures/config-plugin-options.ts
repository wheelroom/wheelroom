export const configPluginOptions = [
  {
    options: {
      testOptione: 'to-pass',
    },
    resolve: 'module-name',
  },
  {
    options: {
      anotherTestOption: 'passed-to-plugin',
      testArray: ['passed', 'to', 'plugin'],
    },
    resolve: 'another-module-name',
  },
]
