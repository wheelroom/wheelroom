/**
 * Part of the mock output of the wheelroom binary. This output is part of the
 * input for a wheelroom command. Command handlers can be added by plugins.
 */

export const argvPluginOptions = {
  'another-module-name': {
    anotherTestOption: 'passed-to-plugin',
    testArray: ['passed', 'to', 'plugin'],
  },
  'module-name': {
    testOptione: 'to-pass',
  },
}
