import { argvCommand } from '../../fixtures/argv-command'
import { command } from './command'

/**
 * Deleting content takes longer than the default 5 seconds max
 */
jest.setTimeout(60000)

describe('Command delete content should', () => {
  test('delete default content set when no test set is specified', async () => {
    argvCommand.contentSet = undefined
    const spy = jest.spyOn(console, 'log')
    await command.handler(argvCommand as any)
    expect(spy).toBeCalled()
    spy.mockRestore()
  })

  test('delete content set test', async () => {
    argvCommand.contentSet = 'test'
    const spy = jest.spyOn(console, 'log')
    await command.handler(argvCommand as any)
    expect(spy).toBeCalled()
    spy.mockRestore()
  })
})
