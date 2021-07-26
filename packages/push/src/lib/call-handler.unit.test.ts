import chalk from 'chalk'
import { callHandler } from './call-handler'

describe('The call handler should', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
  test('show an error when a module does not exist', async () => {
    await callHandler({
      callCommand: 'push',
      callType: 'content',
      pluginName: '@wheelroom/does-not-exist',
    })
    expect(consoleSpy).toHaveBeenCalledWith(
      chalk.red(
        'Could not find plugin: @wheelroom/does-not-exist (MODULE_NOT_FOUND)'
      )
    )
  })

  test('show an error when a module does not have a handler', async () => {
    consoleSpy.mockReset()
    await callHandler({
      callCommand: 'push',
      callType: 'content',
      pluginName: 'chalk',
    })
    expect(consoleSpy).toHaveBeenCalledWith(
      chalk.red('Could not find handler method on plugin: chalk')
    )
  })
})
